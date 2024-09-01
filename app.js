const express = require("express");
const cors = require("cors"); //midleware cho phép app chấp nhận req từ các nguồn khác nhau
const contactsRouter = require("./app/routes/contact.route");
const app = express();

app.use(cors());
app.use(express.json()); // chuyển đổi Json trong body của req sang đối tượng javascript

app.get("/", (req, res) => {
    res.json({ message: "Wellcome to contact book application"});
});

app.use("/api/contacts", contactsRouter); // các route được dùng khi đường dẫn bắt đầu là /api/contacts ví dụ /:id = http://localhost:3000/api/contacts/:10


module.exports = app;