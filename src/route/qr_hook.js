import { Router } from "express";

const router = Router();

const data = {
    data: {
        metadata: {
            app_name: "Bot",
            app_id: 123456,
            title: "Nhập thông tin",
            submit_button: {
                label: "Gửi thông tin",
                background_color: "#6666ff",
                cta: "request",
                url: "https://aldermann.serveo.net/g",
            },
            reset_button: {
                label: "Xóa toàn bộ",
                background_color: "#669999",
            },
            elements: [
                {
                    type: "input",
                    input_type: "number",
                    label: "Phone",
                    required: false,
                    name: "phone",
                    error: "Có lỗi xảy ra",
                    placeholder: "Phone",
                },
                {
                    type: "text",
                    style: "heading",
                    content: "Eat",
                },
                {
                    type: "text",
                    style: "paragraph",
                    content:
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin luctus justo tellus, id viverra enim tincidunt vel. Ut egestas vel ante ac dignissim. Integer faucibus, est commodo accumsan suscipit, leo urna pretium libero, nec porta quam enim a lorem. Donec quis dui eu risus semper semper non quis diam. Quisque posuere egestas velit, ut sagittis turpis sagittis id. Quisque egestas neque dui, a maximus erat lacinia sed. Nam sed sem elit.",
                },
                {
                    meta:  {
                        code: 500,
                        message: "GGNOOB"
                    }
                }
            ],
        },
    },
};

router.get("/", (req, res) => {
    console.log(req.headers);
    res.json(data);
});

export default router;
