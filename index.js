const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine","ejs");
app.set("views","./views");

const campgrounds= [
    {name:"campground 1" , image :"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ0TCCEcdjhuZtSdzuwAFWaOiexR5QFZOmE1Lgpld9FyzRUIOy9"},
    {name:"campground 2" , image :"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTbuQShr87T0VceHhZ5ThhzlQYW1Zkw0sDPsJ4mn81yUWGA985m"}
]


app.get("/",(req,res) =>{
    res.render("landing");
});

app.get("/campgrounds",(req,res) =>{
    res.render("campgrounds",{campgrounds ,campgrounds});
});

app.post("/campgrounds",(req,res)=>{
    const name = req.body.name;
    const image = req.body.image;
    const newCampground = {name :name, image :image}
    campgrounds.push(newCampground);

    res.redirect("/campgrounds");
});

app.get("/campgrounds/new", (req,res) =>{
    res.render("new");
});

const port= process.env.PORT||3000;
app.listen(port, () => console.log("listening on port 3000"));
