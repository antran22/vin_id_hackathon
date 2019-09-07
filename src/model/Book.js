import mongoose from "mongoose";

const BookSchema = mongoose.Schema({
    author: String,
    epub_link: String,
    html_link: String,
    img_link: String,
    title: String,
    book_id: Number,
});


const Book = mongoose.model("Book", BookSchema);
export default Book;
