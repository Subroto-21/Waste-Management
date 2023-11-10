import express from "express";
import {collecterSignin, collecterSignup, signin, signup } from "../controller/user.js";
const router = express.Router();

router.post("/signin", signin);
router.post("/signup", signup);
router.post("/collecter/signin",collecterSignin);
router.post("/collecter/signup",collecterSignup);



export default router;