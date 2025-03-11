import { loadScript } from "@paypal/paypal-js";
import Course from "../models/course.model.js";
import { CoursePurchase } from "../models/coursePurchases.model";

const loadScript = new loadScript(process.env.PAYPAL_SECRET_KEY);

export const createCheckoutSession = async (req, res) => {
    try {
        const userId = req.id;
        const {courseId} = req.body;
      
        const course = await course.findById(courseId);
        if(!course) return res.status(404).json({message: "Course not found!"});
        // create a new course purchase record
        const newPurchase = new CoursePurchase({
            courseId,
            userId,
            amount:course.coursePrice, 
            status: 'pending'
        });

        // create paypal checkout session
        const session = await loadScript.checkout.sessions.create({
            payment_method_types: ['card'],
            line_items: [
                {
                    price_data: {
                        currency: 'inr',
                        product_data: {
                            name: course.courseTitle,
                            images: [course.courseThumbnail]
                        },
                        unit_amount: course.coursePrice * 100, ///Amount in paise denominator
                    },
                    quantity: 1,
                },
            ],
            mode: "payment",
            success_url: `${process.env.FRONTED_URL}/course-progress/${courseId}`, // once payment is successful
            cancel_url: `${process.env.FRONTED_URL}/course-detail/${courseId}`, // once payment is cancelled
            metadata : {
                courseId : courseId,
                userId : userId,
            },
            shipping_address_collection: {
                allowed_countries: ['IN'] , // Optionally restrict allowed countries
            },
        });
        
        if (!session.url) {
            return res.status(400).json({ success: false, message: 'Error while creating session'});
        }

        // save the purchase record 
        newPurchase.paymentId = session.id;
        await newPurchase.save();

        return res.status(200).json({
            success: true,
            url: session.url, /// Return the PayPal checkout URL
        });
         

    } catch (error) {
        console.log(error);
    }
};

