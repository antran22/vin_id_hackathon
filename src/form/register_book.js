function register_book(bookId) {
    return {
        data: {
            metadata: {
                app_name: "QR Bookstore",
                app_id: 229310,
                title: "Thêm sách vào thư viện",
                submit_button: {
                    label: "Đồng ý",
                    background_color: "#6666ff",
                    cta: "request",
                    url: `https://aldermann.serveo.net/add_book?book_id=${bookId}`,
                },
                elements: [
                    {
                        type: "text",
                        style: "heading",
                        content: bookTitle,
                    },
                    {
                        type: "web",
                        content: `<img src='${bookImage}' alt="${bookTitle}"/>`,
                    },
                ],
            },
        },
    };
}

export default bookData;
