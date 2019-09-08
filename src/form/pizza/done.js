function done() {
    return {
        data: {
            metadata: {
                app_name: "QR Bookstore",
                app_id: 229310,
                title: "Done",
                submit_button: {
                    label: "OK",
                    background_color: "#6666ff",
                    cta: "close",
                },
                elements: [
                    {
                        type: "input",
                        input_type: "textarea",
                        name: "",
                        error: "",
                        label: "",
                    },
                ],
            },
        },
    };
}

export default done;
