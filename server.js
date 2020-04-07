const express = require('express');
const mongoose = require('mongoose');
const app = express();


// Set up Database
mongoose.connect("mongodb://127.0.0.1:27017/user-manager", { useNewUrlParser: true })
.then (() =>
    console.log("We are connected to database .............")
)
.catch(err =>
    console.error(err));

// Set up Middelware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// set up Controllers
const UserControl = require('./controllers/UserControl');

// set up Routes
app.post('/api/user/create', UserControl.create);
app.post('/api/user/update', UserControl.update);
app.get('/api/user/retrieve', UserControl.retrieve);
app.delete('/api/user/delete', UserControl.delete);


// start our server
app.listen(3000, () => console.log('Server started on prot 3000......'));