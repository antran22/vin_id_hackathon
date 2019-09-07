import { Router } from "express";
import passport from "passport";
import User from "../model/User";

const authRoute = Router();

authRoute.get("/vin", async req => {
    req.redirect("/google");
});

export default authRoute;
