const express = require('express');
const app = express();

const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const {MONGODB} = require('./config/db.js');
const routes = require('./routes/myRoutes')
app.listen(3000);

//error handler middleware
app.use((err, req, res, next) => {
    const status = err.status || 500;
    res.status(status).json({error: {message: err.message}});
})

mongoose.connect(MONGODB, {useNewUrlParser: true}).then(() => {
    console.log('connected to mongo db');
    return app.listen(4000);
}).catch(err => console.log(err.message))

app.listen(3300, () => {
    console.log('server listing to port 4000');
})