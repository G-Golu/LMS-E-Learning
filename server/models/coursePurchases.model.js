// import mongoose  from 'mongoose';
// const CoursePurchaseSchema = new mongoose.Schema({
//     courseId: {
//         type: mongoose.Schema.Types.ObjectId,
//         ref: 'Course',
//         required: true,
//     },
//     userId:{
//         type: mongoose.Schema.Types.ObjectId,
//         ref: 'User',
//         required: true,
//     },
//     amount:{
//         type: String,
//         enum: ['pending','completed','failed' ],
//         default: 'pending'
//     },
//     paymentId:{
//         type: String,
//         required: true
//     }
// },{timestamps: true});

// export const CoursePurchase = mongoose.model('CoursePurchase', CoursePurchaseSchema);

import { Course } from "./Course.model.js";
import { CoursePurchase } from "./CoursePurchases.model.js";
import User from "./user.model.js";

export const createCheckoutSession = async (req, res) => {
    try {
        const userId = req.id;
        const { courseId } = req.body;

        const course = await Course.findById(courseId);
        if (!course) return res.status(404).json({ message: "Course not found!" });

        const newPurchase = new CoursePurchase({
            courseId,
            userId,
            amount: course.coursePrice,
            status: "pending"
        });

        await newPurchase.save();

        return res.status(200).json({
            success: true,
            message: "Checkout session created",
        });
    } catch (error) {
        console.error("Error creating checkout session:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

export const stripeWebhook = async (req, res) => {
    try {
        const session = req.body;
        if (session.event_type === "CHECKOUT.ORDER.APPROVED") {
            const purchase = await CoursePurchase.findOne({ paymentId: session.resource.id }).populate("courseId");
            if (!purchase) return res.status(404).json({ message: "Purchase not found" });

            purchase.status = "completed";
            await purchase.save();

            await User.findByIdAndUpdate(purchase.userId, { $addToSet: { enrolledCourses: purchase.courseId._id } });
            await Course.findByIdAndUpdate(purchase.courseId._id, { $addToSet: { enrolledStudents: purchase.userId } });
        }
        res.status(200).send();
    } catch (error) {
        console.error("Error handling webhook event:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

export const getCourseDetailWithPurchaseStatus = async (req, res) => {
    try {
        const { courseId } = req.params;
        const userId = req.id;

        const course = await Course.findById(courseId).populate("creator lectures");
        if (!course) return res.status(404).json({ message: "Course not found!" });

        const purchased = await CoursePurchase.findOne({ userId, courseId });
        return res.status(200).json({
            course,
            purchased: !!purchased,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

export const getAllPurchasedCourses = async (_, res) => { // ✅ Fixed function name
    try {
        const purchasedCourses = await CoursePurchase.find({ status: "completed" }).populate("courseId");
        return res.status(200).json({ purchasedCourses });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};
