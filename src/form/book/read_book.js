function read_book(book_id, vin_id, session) {
    return {
        data: {
            metadata: {
                app_name: "QR Bookstore",
                app_id: 229310,
                title: "Hoàn thành",
                submit_button: {
                    label: "Xem sách",
                    background_color: "#6666ff",
                    cta: "url",
                    url: `${process.env.URL}/launch_web?book_id=${book_id}&vin_id=${vin_id}&session=${session}`
                },
                elements: [
                    {
                        type: "input",
                        input_type: "textarea",
                        label: "Phản hồi về trải nghiệm",
                        name: "feedback",
                    },
                ],
            },
        },
    };
}

export default read_book;
