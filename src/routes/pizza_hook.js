import { Router } from "express";
import axios from "axios";
import pizza_order from "../form/pizza/pizza_order";
import confirm_order from "../form/pizza/confirm_order";
import done from "../form/pizza/done";

const router = Router();

router.get("/pizza", (req, res) => {
    res.json(pizza_order());
});

router.post("/process_order", async (req, res) => {
    const { flavour, amount, location } = req.body;
    if (flavour === "suggestion") {
        const resp = await axios.post("http://210.211.99.9:6789/pizza/call");
        if (resp.data.data_message !== "Ok") {
            res.json({
                meta: {
                    code: 404,
                    message: "Lỗi post",
                },
            });
        } else {
            res.json(done());
        }
    } else {
        if (!flavour || !amount || !location) {
            res.json({
                meta: {
                    code: 500,
                    message: "Thiếu dữ liệu",
                },
            });
            return;
        }
        res.json(confirm_order(flavour, amount, location));
    }
});

export default router;

// router.get("/confirm", (req, res) => {
//     res.json(confirm_order());
// });
