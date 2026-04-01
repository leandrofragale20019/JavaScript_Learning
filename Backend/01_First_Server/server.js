const express = require(`express`);

const app = express();

const PORT = 3000;

app.get(`/`, (req, res) => {
    res.send("Hello, My first Express Backend Server")
})

app.listen(PORT, () => {
    console.log("Server is running")
})