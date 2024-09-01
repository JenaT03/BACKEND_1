const express = require("express");
const cors = require("cors"); //midleware cho phép app chấp nhận req từ các nguồn khác nhau
const app = express();

app.use(cors());
app.use(express.json()); // chuyển đổi Json trong body của req sang đối tượng javascript

app.get("/", (req, res) => {
    res.json({ message: "Wellcome to contact book application"});
});

module.exports = app;