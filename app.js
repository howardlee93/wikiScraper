const express = require('express');
const cors = require('cors');
const fs = require('fs');
const scrape = require('./scrape.js');


const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});

app.get("/", (req,res) => res.send("Hello, this is the page"))

app.post("/api/:term" , (req, res) => {
    scrape.search(req.params.term)
    .then ((data)=> res.json(data))
    // .then(() =>  res.sendFile(__dirname + `/res/${req.params.term}.pdf`)
})

