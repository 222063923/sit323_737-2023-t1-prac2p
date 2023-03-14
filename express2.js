const express = require('express');
const res = require("express/lib/response");
const app = express();
const addTwoNumber= (n1,n2) => {
    return n1+n2;
}

//respond with "hello world" when a GET request is made to the homepage
app.get('/addTwoNumber', (req,res) => {
    const n1= parseInt(req.query.n1);
    const n2= parseInt(req.query.n2);
    const result = addTwoNumber(n1,n2);
    res.json({statuscode:200, data: result });
})
//list to a particular port
console.log (addTwoNumber(19,12));
const port=3040;
app.listen(port,() => {
    console.log("hello I'm listening to port" + port);
})

