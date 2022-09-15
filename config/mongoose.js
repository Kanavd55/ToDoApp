//require library
const mongoose = require('mongoose');

//connect to the databse
mongoose.connect('mongodb://localhost/todo_list_db');

//acquire the connection to check if it is successful.
const db=mongoose.connection;

//error
db.on('error',console.error.bind(console,'error connecting to db'));

//up and running then print the message
db.once('open',function(){
    console.log('successfully connected to databse');
})