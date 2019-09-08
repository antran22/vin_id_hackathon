import { Router } from "express";
import Book from "../model/Book";

const router = Router();

router.get("/", async (req, res) => {
    if (!req.user || !req.user.owned_book) {
        res.redirect("../auth/signin");
        return;
    }
    const books = await Book.find({ book_id: { $in: req.user.owned_book } });
    res.render("pages/owned_book", { books, user: req.user });
});

export default router;
