// import jwt from "jsonwebtoken";

// export const generateToken = (res, user, message) => {
//     const token = jwt.sign({userId:user._id}, process.env.SECRET_KEY, {expiresIn:'1d'}); // can rt 1d or 1h  means one day or one hour
 
//     return res.status(200).cookie("token", token, {httpOnly:true, sameSite:'strict', maxAge:24*60*60*1000, // for 1 day

//  }).json({
//     success: true,
//     message,
//     user,
//  });
// };

import jwt from "jsonwebtoken";

export const generateToken = (res, user, message) => {
  const token = jwt.sign({ userId: user._id }, process.env.SECRET_KEY, {
    expiresIn: "1d",
  });

  return res
    .status(200)
    .cookie("token", token, {
      httpOnly: true,
      sameSite: "strict",
      maxAge: 24 * 60 * 60 * 1000, // 1 day
    }).json({
        success:true,
        message,
        user
    });
};