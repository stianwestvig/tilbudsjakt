const express = require('express');
const handlebars = require('express-handlebars');
const path = require("path");

const web = require('./routes/web');
const api = require('./routes/api');
const handleError = require('./routes/error');

const app = express();
const port = process.env.PORT || 3000;

app.engine('handlebars', handlebars({
  defaultLayout: 'main',
  layoutsDir: __dirname + '/views/layouts'
}));
app.set('views', __dirname + '/views');
app.set('view engine', 'handlebars');

app.use('/static', express.static(path.join(__dirname, 'static')))
app.use('/api', api);
app.use('/', web);
app.use(handleError);

app.listen(port, () => {
  console.log('App is now running on port 3000');
});