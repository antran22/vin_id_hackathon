function pizza_order() {
    return {
        data: {
            metadata: {
                app_name: "QR Bookstore",
                app_id: 229310,
                title: "Order Pizza",
                submit_button: {
                    label: "Đặt pizza",
                    background_color: "#6666ff",
                    cta: "request",
                    url: `${process.env.URL}/hook/process_order`,
                },
                elements: [
                    {
                        type: "radio",
                        display_type: "inline",
                        required: true,
                        label: "Loại pizza",
                        name: "flavour",
                        error: "Chọn 1 lựa chọn",
                        options: [
                            {
                                label: "Gợi ý cho tôi",
                                value: "suggestion",
                            },
                            {
                                label: "Bò",
                                value: "beef",
                            },
                            {
                                label: "Gà",
                                value: "chicken",
                            },
                            {
                                label: "Nấm",
                                value: "mushroom",
                            },
                            {
                                label: "Phô mai",
                                value: "cheese",
                            },
                        ],
                    },
                    {
                        type: "input",
                        input_type: "number",
                        name: "amount",
                        error: "Hãy điền vào số lượng pizza",
                        label: "Số lượng pizza",
                    },
                    {
                        type: "input",
                        input_type: "textarea",
                        name: "location",
                        error: "Điền vào địa chỉ của bạn",
                        label: "Địa chỉ giao hàng",
                    },
                ],
            },
        },
    };
}

export default pizza_order;
