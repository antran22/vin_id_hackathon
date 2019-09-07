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
                    url: `${process.env.URL}/add_book?book_id=${bookId}`,
                },
                elements: [
                    {
                        type: "checkbox",
                        display_type: "inline",
                        required: true,
                        label: "Đồng ý",
                        name: "agreement",
                        error: "Bạn chưa đồng ý với các điều khoản",
                        options: [
                            {
                                label: "",
                                value: "yes",
                            },
                        ],
                    },
                ],
            },
        },
    };
}

export default register_book;
