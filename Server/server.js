const express = require("express");
const connectDB = require("./config/db");
const cors = require("cors");
const upload = require("express-fileupload");

const corsOption = {
    origin: "http://localhost:5500",
  }
// Connect to the Database
connectDB();
 
const app = express(); 

// Init Midleware
app.use(cors(corsOption));
app.use(express.json({extended:false}));
app.use(upload()); // permet l'upload des images


app.get("/",(req, res) =>{ 
    res.send("API running")
})

// Define Routes
app.use('/news', require("./route/news"));
app.use('/login', require("./route/login"));


const PORT = process.env.PORT || 6000;

app.listen(PORT, ()=>{
    console.log("server started on port : "+PORT)
});