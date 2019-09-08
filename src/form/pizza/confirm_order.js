const pizza = {
    beef: {
        price: 50000,
        name: "Bò",
    },
    chicken: {
        price: 50000,
        name: "Gà",
    },
    mushroom: {
        price: 40000,
        name: "Nấm",
    },
    cheese: {
        price: 70000,
        name: "Phô mai",
    },
};

function confirm_order(type, amount, location) {
    return {
        data: {
            metadata: {
                app_name: "QR Bookstore",
                app_id: 229310,
                title: "Xác nhận đơn hàng",
                submit_button: {
                    label: "Xác nhận",
                    background_color: "#6666ff",
                    cta: "request",
                    url: `${process.env.URL}/hook/pizza_suggest`,
                },
                elements: [
                    {
                        type: "text",
                        style: "heading",
                        content: `Bạn muốn đặt ${amount} chiếc pizza loại ${pizza[type].name} đến địa chỉ: `,
                    },
                    {
                        type: "text",
                        style: "paragraph",
                        content: `${location}`,
                    },
                    {
                        type: "text",
                        style: "heading",
                        content: `Thành tiền: ${amount * pizza[type].price}`,
                    },
                ],
            },
        },
    };
}

export default confirm_order;
