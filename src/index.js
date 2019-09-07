import "./config";
import express from "express";
import bodyParser from "body-parser";
import httpContext from "express-http-context";
import authRoute from "./route/auth";
import bookData from "./form/book_data";
import User from "./model/User";
import signUp from "./form/sign_up";

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
                bookId: req.params.book_id,
                bookTitle: "Star people",
                bookImage:
                    "https://www.gutenberg.org/cache/epub/60081/pg60081.cover.medium.jpg",
            },
            false,
        ),
    );
});

app.post("/register_book", (req, res) => {
    const vin_id = req.get("user_id");
    const user = User.find({ vin_id });
    if (!user) {
        res.json(signUp())
    }
});

app.use("/auth", authRoute);
app.listen(3000, () => console.log("Listening at 3000"));
