function signIn(bookId) {
    return {
        data: {
            metadata: {
                title: "Đăng nhập vào hệ thống QR Bookstore",
                app_id: 229310,
                app_name: "QR Bookstore",
                submit_button: {
                    label: "Đăng nhập",
                    background_color: "#6666ff",
                    cta: "request",
                    url: `${process.env.URL}/hook/sign_in?book_id=${bookId}`,
                },
                elements: [
                    {
                        type: "text",
                        style: "heading",
                        content: "Đăng nhập",
                    },
                    {
                        type: "input",
                        input_type: "password",
                        required: true,
                        label: "Mật khẩu",
                        name: "password",
                        error: "Nhập mật khẩu",
                    },
                ],
            },
        },
    };
}

export default signIn;
