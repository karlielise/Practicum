const express = require("express");
const app = express();
const mongoose = require("mongoose");
const hotelRouter = require("./routes/hotels");

mongoose.connect("mongodb://localhost/appointment");

app.use(express.urlencoded({extended:false}));

app.use("/hotels", hotelRouter);

app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", (req, res) => { 
    res.render("hotels/index");
})


app.listen(3000, console.log("You are connected"));