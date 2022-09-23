const express = require("express");
const router = express.Router();
const hotelSchema = require("../models/hotel");


router.get("/book", (req, res) => {
    res.render("hotels/book");
})

router.post("/", async (req, res) => {
    const hotel = new hotelSchema({
        email: req.body.email,
        currentDate: req.body.book_date,
        depatureDate: req.body.dep_date,
        adults: req.body.adult,
        children: req.body.child
    })
    try {
        hotel = await hotel.save();
        res.render("hotels/message");
    } catch (e) {
        
    }
})


module.exports = router;