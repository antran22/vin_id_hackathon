import "./config";
import express from "express";
import bodyParser from "body-parser";
import httpContext from "express-http-context";
// import session from "express-session";
import cookie from "cookie-parser";
import dotenv from "dotenv";
import hookRouter from "./routes/qr_hook";
import qrListRouter from "./routes/qr_gen";
import viewBookRouter from "./routes/view_book";
import Session from "./model/Session";
import User from "./model/User";

dotenv.config();

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookie());
// app.use(
//     session({
//         secret: "Rerorerorero",
//         resave: false,
//         saveUninitialized: true,
//         cookie: { secure: true },
//     }),
// );
app.get("/launch_web", (req, res) => {
    // res.send(`Book data for book ${req.query.book_id}, vin_id: ${req.query.vin_id}`);
    const user_id = req.query.vin_id;
    const { session } = req.query;
    const { book_id } = req.query;
    res.cookie("session", session)
        .cookie("vin_id", user_id)
        .redirect(`/view/epub?book_id=${book_id}`);
});
app.use(async (req, res, next) => {
    const id = req.headers.session || req.cookies.session;
    const vin_id = req.headers.user_id || req.cookies.vin_id;
    if (id) {
        req.session = await Session.findOne({ id });
        const user = await User.findOne({ vin_id });
        if (!req.session) {
            req.session = Session({
                id,
                loggedIn: false,
                createdAt: new Date(),
            });
            req.user = user;
            await req.session.save();
        }
    }
    next();
});

app.use("/static", express.static("static"));
app.use(httpContext.middleware);
app.set("view engine", "ejs");
app.use("/hook", hookRouter);
app.use((req, res, next) => {
    next();
});
app.use("/gen", qrListRouter);
app.use("/view", viewBookRouter);
app.get("/", (req, res) => {
    res.render("pages/index", {user: req.user});
});

app.listen(3000, () => console.log("Listening at 3000"));
