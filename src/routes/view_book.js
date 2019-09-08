import { Router } from "express";
import Book from "../model/Book";

const router = Router();

router.get("/epub", async (req, res) => {
    const { book_id } = req.query;
    const book = await Book.findOne({ book_id: book_id });
    if (!book) {
        res.status(404).send("Not found");
        return;
    }
    res.render("pages/view_book", { path: `/static/${book_id}.epub`, user: req.user});
});

router.get("/html", async (req, res) => {
    const { book_id } = req.query;
    const book = await Book.findOne({ book_id: book_id });
    res.redirect(book.html_link);
});

export default router;
