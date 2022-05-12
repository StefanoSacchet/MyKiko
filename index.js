const app = require('./app/app.js');
const mongoose = require('mongoose');

const User = require('./app/models/user');

const port = process.env.port || 8080;

app.locals.db = mongoose.connect('mongodb+srv://prova:pronti@cluster0.bj5sk.mongodb.net/Cluster0?retryWrites=true&w=majority'/*process.env.DB_URL*/)
    .then(() => {
        console.log("Connected Database");
        app.listen(port, () => {
            console.log("Server listening on port " + port);
        })
    });
    
/*new User({
    email: 'ciao',
    password: '123'
}).save();*/