const express = require("express");

const app = express();

app.get("/", function(req, res){
    res.send("Started aaa");
})

app.get("/contato", function(req, res){
    res.send("pagina contato");
})
app.listen(8080);
