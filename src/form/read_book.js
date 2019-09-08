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
                // elements: [
                //     {
                //         type: "checkbox",
                //         display_type: "inline",
                //         required: true,
                //         label: "Đồng ý",
                //         name: "agreement",
                //         error: "Bạn chưa đồng ý với các điều khoản",
                //         options: [
                //             {
                //                 label: "",
                //                 value: "yes",
                //             },
                //         ],
                //     },
                // ],
            },
        },
    };
}

export default read_book;
