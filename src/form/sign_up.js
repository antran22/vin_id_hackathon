function signUp() {
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
                    url: "https://aldermann.serveo.net/sign_up",
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
                    },
                ],
            },
        },
    };
}

export default signUp;
