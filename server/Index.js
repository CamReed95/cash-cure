require('dotenv').config();
const express = require('express');
const session = require('express-session');
const massive = require('massive');
const path = require('path');

const {CONNECTION_STRING, SERVER_PORT, SESSION_SECRET} = process.env;
const {login, register, logout, userSession, updatePassword} = require('./controller/authCtrl');
const incomeCtrl = require('./controller/incomeCtrl');
// other lines

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
    app.set('db', db)
    console.log('Connected to db')
}).catch( err => console.log(err));

// AUTH
app.post('/auth/login', login); 
app.post('/auth/register', register);
app.get('/auth/logout', logout);
app.get('/auth/user_session', userSession);

// HOME

app.post('/api/income', incomeCtrl.addValue);
app.get('/api/income', incomeCtrl.getUserValues);
app.put('/api/income/:id', incomeCtrl.editValue);
app.delete('/api/income/:id', incomeCtrl.deleteValue); 
// app.get('*', (req, res)=>{
//     res.sendFile(path.join(__dirname, '../build/index.html'));
// }); // FOR HOSTING

app.listen(SERVER_PORT, () => console.log(`Listening on port ${SERVER_PORT}`));