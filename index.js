const express = require('express');

const firebase = require('firebase');
const firebaseConfig = require('./config/firebase');
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

const bodyParser = require('body-parser');

const verifyToken = require('./middlewares/verifyToken');

const app = express();

app.use(bodyParser.json());

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`App listening on port ${process.env.PORT}`)
});

const createToken = require('./utils/createToken');

app.post('/auth', (request, response, next) => {
    db.collection('users')
        .where('email', '==', request.body.email)
        .where('password', '==', request.body.password)
        .get()
        .then(qs => {
            const u = qs.docs.map(user => user.data())[0];
            if (u.exists) {
                return response
                    .status(401)
                    .send({
                        code: "not_found",
                        message: "User not found"
                    });
            }

            const id = u.id;
            response.json({token: createToken({id}) });

        })
        .catch(err => {
            console.error("Error to retrieve users", err);
            response.sendStatus(500);
        });
});

app.get('/users/:id', verifyToken, (request, response, next) => {
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