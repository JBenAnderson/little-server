const express = require("express");

const app = express();

app.get("/", function(req, res){
    res.send("Hello World!  I am a little server!");
});

app.listen(4800, function() {
    console.log("Running on port 4800!");
})