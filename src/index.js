
import express from "express"
const app = express();


app.get("/", (req, res) => {

    res.send("jai ho b");
});

app.listen(3000, () => "host is listing on port 3000");
