import QR from "qrcode";
import { Router } from "express";
import Book from "../model/Book";

const router = Router();

router.get("/pizza", async (req, res) => {
    const url = `${process.env.URL}/hook/pizza`;
    const s = `https://qr.id.vin/hook?url=${encodeURI(url)}&method=GET`;
    const image = await QR.toDataURL(s);
    // res.send(`<img src='${image}' alt="test"/>`);
    res.render("pages/pizza_qr", { image, user: req.user });
});

router.get("/book", async (req, res) => {
    const bookList = await Book.find({});
    const qrImages = await Promise.all(
        bookList.map(async book => {
            const url = `${process.env.URL}/hook/book?book_id=${book.book_id}`;
            const s = `https://qr.id.vin/hook?url=${encodeURI(url)}&method=GET`;
            return { image: await QR.toDataURL(s), book };
        }),
    );
    res.render("pages/book_qr", { codes: qrImages, user: req.user });
});

export default router;
