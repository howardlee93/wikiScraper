const express = require('express');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});

app.get("/", (req,res) => res.send("Hello, this is the page"))

app.post("/api/:term" , (req, res) =>
    // res.send(req.params.term)
    res.send("hi")
)

// app.post('/', function (req, res) {
//     res.send('POST request to the homepage')
//   })
  