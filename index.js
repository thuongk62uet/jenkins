var express = require('express');
var app = express();
app.get('/contact', function (req, res) {
    res.send('Hello jenkins');
});

app.listen(3000, function() {
    console.log('Example app listening on port 3000!');
})