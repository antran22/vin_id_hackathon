import QR from "qrcode";
import { Router } from "express";
import Book from "../model/Book";

const router = Router();

router.get("/", async (req, res) => {
    const bookList = await Book.find({});
    const qrImages = await Promise.all(
        bookList.map(async book => {
            const url = `${process.env.URL}/hook/book?book_id=${book.book_id}`;
            const s = `https://qr.id.vin/hook?url=${encodeURI(url)}&method=GET`;
            return QR.toDataURL(s);
        }),
    );
    res.render("pages/qr_gen", { codes: qrImages, user: req.user});
});

export default router;
