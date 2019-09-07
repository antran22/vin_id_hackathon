function bookData({ bookId, bookTitle, bookImage }, isPaid) {
    return {
        data: {
            metadata: {
                app_name: "QR Bookstore",
                app_id: 229310,
                title: "Thông tin sách",
                submit_button: {
                    label: isPaid ? "Thêm vào tủ sách" : "Mua sách",
                    background_color: "#6666ff",
                    cta: "request",
                    url: `${process.env.URL}/register_book?book_id=${bookId}`,
                },
                elements: [
                    {
                        type: "text",
                        style: "heading",
                        content: bookTitle,
                    },
                    {
                        type: "web",
                        content: `<div style="text-align: center"><img src='${bookImage}' alt="${bookTitle}"/></div>`,
                    },
                    {
                        type: "checkbox",
                        display_type: "inline",
                        required: true,
                        label: "Bạn có đồng ý với các điều khoản ở đây không?",
                        name: "agreement",
                        error: "Bạn chưa đồng ý với các điều khoản",
                        options: [
                            {
                                label: "Có",
                                value: "yes",
                            },
                        ],
                    },
                ],
            },
        },
    };
}

export default bookData;
