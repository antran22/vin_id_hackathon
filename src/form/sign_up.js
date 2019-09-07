function signUp(bookId) {
    return {
        data: {
            metadata: {
                title: "Đăng ký người dùng",
                app_id: 229310,
                app_name: "QR Bookstore",
                submit_button: {
                    label: "Đăng ký",
                    background_color: "#6666ff",
                    cta: "request",
                    url: `https://aldermann.serveo.net/sign_up?book_id=${bookId}`,
                },
                elements: [
                    {
                        type: "text",
                        style: "heading",
                        content: "Đăng ký tài khoản",
                    },
                    {
                        type: "input",
                        input_type: "text",
                        required: true,
                        label: "Tên",
                        name: "name",
                        error: "Hãy điền tên của bạn",
                        placeholder: "Nguyễn Văn An",
                    },
                    {
                        type: "input",
                        input_type: "phone",
                        required: true,
                        label: "Số điện thoại",
                        name: "phone",
                        error: "Hãy điền số điện thoại của bạn",
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

export default signUp;
