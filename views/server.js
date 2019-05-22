var express = require('express');
var express = require('body-parser');
var express = require('method-override');
var exphbs = require('express-handlebars');

var app = express();
app.use(express.statistic(__dirname + '/public'));

app.use(bodyParser.urlencoded({
    extended: false
}))

app.use(methodOverride('_method'));
app.engine('handlebars',exphbs({
    defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

var port = 3000;
app.listen(port);
