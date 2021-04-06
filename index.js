var express = require('express');
var app = express()

app.get('/', function (req, res) {
    res.send('Hello World')
})

// adding quit/close function
app.get('/quit', function (req,res) {
    res.send('closing..');
    app.close();
});
// app.listen(8081);

// start server
var server = app.listen(8081, function () {
    var host = server.address().address
    var port = server.address().port
    console.log("Example app listening at http://%s:%s", host, port)
})
