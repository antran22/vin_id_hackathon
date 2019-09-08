import { Router } from "express";
import uuid from "uuid/v1";
import User, { comparePassword } from "../model/User";
import Session from "../model/Session";

const router = Router();

router.get("/", async (req, res) => {
    res.render("pages/auth", {user: null});
});
router.post("/login", async (req, res) => {
    const { password, phone } = req.body;
    if (!password || !phone) {
        res.status(401).send("<h1>Số điện thoại hoặc mật khẩu sai</h1>")
    }
    const user = await User.findOne({ phone });
    if (!user) {
        res.status(401).send("<h1>Không tồn tại user</h1>");
        return;
    }
    const cmp = await comparePassword(password, user);
    if (cmp) {
        req.session = new Session({
            id: uuid(),
            loggedIn: true,
            createdAt: new Date(),
        });
        req.user = user;
        await req.session.save();
        res.cookie("session", req.session.id)
            .cookie("vin_id", user.vin_id)
            .redirect("../");
    }
    res.status(401).send("<h1>Số điện thoại hoặc mật khẩu sai</h1>")
});

export default router;
