const express = require('express');

const app = express();

app.get('/users', (request, response, next) => {
    console.log(request.query);
    console.log(response);
    response.json({retorno: "Heya"});
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`App listening on port ${process.env.PORT}`)
});

console.log('MEU AMBIENTE', process.env.NODE_ENV);