const express = require('express');

const firebase = require('firebase');
const firebaseConfig = require('./config/firebase');
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

const app = express();

app.get('/users/:id', (request, response, next) => {
    const id = request.params.id;

    db.collection('users').doc(id).get()
        .then(user => {
            if (!user.exists) {
                response.sendStatus(204);
            }
            response.json(user.data());
        })
        .catch(err => {
            response.json({success: false, err});
        });
});

app.get('/users', (request, response, next) => {
    db.collection('users').get()
        .then(users => {
            const result = [];
            users.forEach(user => {
                result.push(user.data());
            });
            if (!result.length) {
                response.sendStatus(204);
            }
            response.json(result);
        })
        .catch(err => {
            console.error("Error to retrieve users", err);
            response.sendStatus(500);
        });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`App listening on port ${process.env.PORT}`)
});