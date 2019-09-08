import Book from "../model/Book";
import bookData from "../form/book_data";
import User, { comparePassword } from "../model/User";
import signUp from "../form/sign_up";
import register_book from "../form/register_book";
import read_book from "../form/read_book";
import { Router } from "express";
import signIn from "../form/sign_in";

const router = Router();

router.get("/book", async (req, res) => {
    const { book_id } = req.query;
    const book = await Book.findOne({ book_id: book_id });
    const data = bookData(
        {
            bookId: book_id,
            bookTitle: book.title,
            bookImage:
                book.img_link ||
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcAuCz3QceLQdk9Oxxxul233aJUoJTBDnYSID8u2C7l4dZKuDW",
        },
        false,
    );
    res.json(data);
});

router.post("/register_book", async (req, res) => {
    const vin_id = req.headers.user_id;
    const { book_id } = req.query;
    const user = await User.findOne({ vin_id });
    if (!user) {
        res.json(signUp(book_id));
    } else if (!req.session.loggedIn) {
        res.json(signIn(book_id));
    } else res.json(register_book(book_id));
});

router.post("/sign_in", async (req, res) => {
    const { password } = req.body;
    const { book_id } = req.query;
    const user = await User.findOne({ vin_id: req.headers.user_id });
    if (!user) {
        res.redirect(`/sign_up?book_id=${book_id}`);
        return;
    }
    const cmp = await comparePassword(password, user);
    if (cmp) {
        req.session.loggedIn = true;
        await req.session.save();
        res.json(register_book(book_id));
        return;
    }
    res.status(404).json({
        meta: {
            code: 404,
            message: "Sai mật khẩu",
        },
    });
});

router.post("/sign_up", async (req, res) => {
    const { name, password, phone } = req.body;
    const { book_id } = req.query;
    if ((await User.count({ vin_id: req.headers.user_id })) <= 0) {
        console.log(phone, await User.find({phone}));
        if (User.count({ phone }) > 0) {
            res.status(404).json({
                meta: {
                    code: 404,
                    message: "Số điện thoại này đã tồn tại",
                },
            });
            return;
        }
        const user = new User({
            password,
            name,
            phone,
            vin_id: req.headers.user_id,
        });
        req.session.loggedIn = true;
        await req.session.save();
        await user.save();
        req.user = user;
        res.json(register_book(book_id));
    } else {
        res.redirect(`/sign_in?book_id=${book_id}`);
    }
});

router.post("/add_book", async (req, res) => {
    const { book_id } = req.query;
    const vin_id = req.headers.user_id;
    const { session } = req.headers;
    const user = await User.findOne({ vin_id });
    if (!req.session.loggedIn) {
        if (user) res.redirect(`/sign_in?book_id=${book_id}`);
        else res.redirect(`/sign_up?book_id=${book_id}`);
    }
    user.owned_book = [...user.owned_book, book_id];
    await user.save();
    res.json(read_book(book_id, vin_id, session));
});

export default router;
