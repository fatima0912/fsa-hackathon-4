const mongoose  = require("mongoose");
const config = require("../config");

const get = (req, res) => {
    res.status(200).send("Ecommerce products Connected");
}
const health = (req, res) => {
    try {
        mongoose.connect(config.dbConStr)
        res.status(201);

        res.json({ database: "up" });
        mongoose.connection.close();
    } catch (e) {
        res.status(500);
        res.send('Internal Server Error');
    }

}
module.exports = { get, health };