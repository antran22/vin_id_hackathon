import "./config";
import express from "express";
import bodyParser from "body-parser";
import httpContext from "express-http-context";
import authRoute from "./route/auth";
import bookData from "./form/book_data";
import User from "./model/User";
import signUp from "./form/sign_up";
import register_book from "./form/register_book";
import read_book from "./form/read_book";

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(httpContext.middleware);
app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.render("pages/index");
});

app.get("/book", (req, res) => {
    res.json(
        bookData(
            {
                bookId: req.query.book_id,
                bookTitle: "Star people",
                bookImage:
                    "https://www.gutenberg.org/cache/epub/60081/pg60081.cover.medium.jpg",
            },
            false,
        ),
    );
});

app.post("/register_book", async (req, res) => {
    const vin_id = req.headers.user_id;
    const { book_id } = req.query;
    const user = await User.findOne({ vin_id });
    if (!user) {
        res.json(signUp(book_id));
        return;
    }
    res.json(register_book(book_id));
});

app.post("/sign_up", async (req, res) => {
    const { name, password, phone } = req.body;
    const { book_id } = req.query;
    const user = new User({
        password,
        name,
        phone,
        vin_id: req.headers.user_id,
    });
    await user.save();
    res.json(register_book(book_id));
});

app.post("/add_book", async (req, res) => {
    const { book_id } = req.query;
    const vin_id = req.headers.user_id;
    const user = await User.findOne({ vin_id });
    user.owned_book = [...user.owned_book, book_id];
    await user.save();
    res.json(read_book());
});

app.get("/read_book", (req, res) => {
    res.send(`Book data for book ${req.query.book_id}`);
});

app.use("/auth", authRoute);
app.listen(3000, () => console.log("Listening at 3000"));
