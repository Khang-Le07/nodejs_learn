const path = require('path');
const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const app = express();
const port = 3000;
const route = require('./routes');
const db = require('./config/db');
const methodOverride = require('method-override')
// Connect DB
db.connect();
app.use(express.static(path.join(__dirname, 'public')));
//Template Engine
app.engine(
    'hbs',
    handlebars({
        extname: '.hbs',
        helpers: {
            sum:(a, b)=>a+b,
        }
    }),
);
app.use(methodOverride('_method'))
app.use (express.urlencoded({
    extended: true
}))
app.use(express.json())
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));
//Logger
app.use(morgan('combined'));

route(app);

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});
