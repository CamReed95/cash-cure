require('dotenv').config();
const express = require('express');
const session = require('express-session');
const massive = require('massive');
const path = require('path');

const {CONNECTION_STRING, SERVER_PORT, SESSION_SECRET} = process.env;
const {login, register, logout, userSession, updatePassword} = require('./controller/authCtrl');
const {getValues, getUserValues, addValue, editValue, deleteValue} = require('./controller/valuesCtrl');

const app = express();
app.use(express.json());

app.use(express.static( `${__dirname}/../build`) );

app.use(session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 14
    }
}));

massive({
    connectionString: CONNECTION_STRING,
    ssl: {
        rejectUnauthorized: false
    }
}).then(db => {
    console.log('Connected to db')
    app.set('db', db)
}).catch( err => console.log(err));

// AUTH
app.post('/auth/login', login); 
app.post('/auth/register', register);
app.get('/auth/logout', logout);
app.get('/auth/user_session', userSession);

// HOME
app.get('api/values', getValues);
app.get('api/values', getUserValues);
app.put('/api/values/:id', editValue);
app.delete('/api/values/:id', deleteValue); 
app.get('*', (req, res)=>{
    res.sendFile(path.join(__dirname, '../build/index.html'));
});

const port = 5500;
app.listen(SERVER_PORT, () => console.log(`Listening on port ${SERVER_PORT}`));