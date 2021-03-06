const sprintLinks = require('./lib/sprintLinks');
const express = require('express');
const expressHandelbars = require('express-handlebars');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));

// Configure Handlebars view engine
app.engine('handlebars', expressHandelbars({
    defaultLayout: 'main',
}))
app.set('view engine', 'handlebars');

app.get('/', (req, res) => {
    res.render('portfolio', { sprintLinks2: sprintLinks.sprint3href(0),
                              sprintLinks3: sprintLinks.sprint3href(1),
                              sprintLinks4: sprintLinks.sprint3href(2),
                              title2: sprintLinks.sprintTitles(0),
                              title3: sprintLinks.sprintTitles(1),
                              title4: sprintLinks.sprintTitles(2) })
});

app.get('/about', (req, res) => res.render('about'));

app.get('/dice', (req, res) => res.render('dice'));

app.get('/syllabus', (req, res) => res.render('syllabus'));

app.get('/regex', (req, res) => res.render('regex'));

// Custom 404 page
app.use((req, res) => {
    res.status(404);
    res.render('404');
})

// Custom 500 page
app.use((err, req, res, next) => {
    console.error(err.message);
    res.status(500);
    res.render('500');
})

app.listen(port, () => console.log(
    `Express started on http://localhost:${port}; ` +
    `press Ctrl-C to terminate.`))
