
const express = require("express");
const app = express();


app.get("/", (req, res) => {

    res.send("jai ho");
});

app.listen(3000, ()=>"host is listing on port 3000");
