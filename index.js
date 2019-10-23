const express = require('express');

const firebase = require('firebase');
const firebaseConfig = require('./config/firebase');
//const firebaseApp = firebase.initializeApp(firebaseConfig);
//const db = firebaseApp.firestore();

const bodyParser = require('body-parser');

const verifyToken = require('./middlewares/verifyToken');

const app = express();

app.use(bodyParser.json());

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`App listening on port ${process.env.PORT}`)
});

const createToken = require('./utils/createToken');

const Users = require('./controllers/Users')
app.post('/auth', Users.get);

app.get('/users/:id', /*verifyToken,*/ Users.get);

app.get('/users', (request, response, next) => {
    db.collection('users').get()
        .then(qs => {
            const result = qs.docs.map(user => user.data());
            if (result.length == 0) {
                response.sendStatus(204);
            }
            response.json(result);
        })
        .catch(err => {
            console.error("Error to retrieve users", err);
            response.sendStatus(500);
        });
});