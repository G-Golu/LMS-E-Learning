import express from "express";
import isAuthenticated from "../middlewares/isAuthenticated.js";
import { createCheckoutSession, getAllPurchasedCourse, getCourseDetailWithPurchaseStatus, paypalwebhook } from "../controllers/coursePurchase.controller.js";


const router = express.Router();

router.route("/checkout/create-checkout-session").post(isAuthenticated, createCheckoutSession);
router.route("/webhook").post(express.raw({type:"application/json"}), paypalwebhook);
router.route("/course/:courseId/detail-with-status").get(isAuthenticated,getCourseDetailWithPurchaseStatus);

router.route("/").get(isAuthenticated,getAllPurchasedCourse);

export default router;



// chatgpt
// import express from "express";
// import isAuthenticated from "../middlewares/isAuthenticated.js";
// import { 
//   createCheckoutSession, 
//   getAllPurchasedCourse, 
//   getCourseDetailWithPurchaseStatus, 
//   paypalwebhook 
// } from "../controllers/coursePurchase.controller.js";

// const router = express.Router();

// // ✅ PayPal checkout session
// router.route("/checkout/create-checkout-session").post(isAuthenticated, createCheckoutSession);

// // ✅ PayPal webhook (or capture handler)
// router.route("/webhook").post(express.json(), paypalwebhook);

// // ✅ Course detail with purchase status
// router.route("/course/:courseId/detail-with-status").get(isAuthenticated, getCourseDetailWithPurchaseStatus);

// // ✅ Get all purchased courses
// router.route("/").get(isAuthenticated, getAllPurchasedCourse);

// export default router;
