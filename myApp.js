let express = require('express');
let app = express();

app.listen(3000)

console.log(__dirname)

app.get('/hello', (request, reponse) => {
    response.sendFile(__dirname +'/views/index.html')


































 module.exports = app;
