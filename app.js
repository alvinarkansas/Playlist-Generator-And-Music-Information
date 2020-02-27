const express = require('express');
const app = express();
const port = 3000;
const routers = require('./routers/index');
const session = require('express-session')

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'))
app.use(express.urlencoded({ extended: true }))
app.use(session({
    secret: 'secret',
    resave: false,
    saveUninitialized: true
}))
app.use(routers);

app.listen(port, ()=> {
    console.log(`listening on port ${port}`);
})