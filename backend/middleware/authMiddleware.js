import jwt from "jsonwebtoken";
import asyncHandler from "express-async-handler";
import User from "../models/userModel.js";
// checks if current user authorized and has a valid token
const protect = asyncHandler(async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];
      //decrypt user password using private key
      // if token is correct than should return user id
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      //console.log(decoded);
      // return user without password property
      req.user = await User.findById(decoded.id).select("-password");
      //req._id = decoded.id;
      //console.log(decoded.id);
      next();
    } catch (error) {
      //console.error(error);
      res.status(401);
      throw new Error("Not authorized, token failed");
    }
  }

  if (!token) {
    res.status(401);
    throw new Error("Not authorized, no token");
  }
});
// checks if current user is admin
const admin = (req, res, next) => {
  if (req.user && req.user.isAdmin) {
    next();
  } else {
    res.status(401);
    throw new Error("Not authorized as an admin");
  }
};

export { protect, admin };
