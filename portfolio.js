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

app.get('/', (req, res) => res.render('portfolio'));

app.get('/about', (req, res) => res.render('about'));

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







/* // for when I want to link a git repository.
function myGit(repo){
    var myHub = "https://github.com/ErikLMeyer/xxx";
    var myRepo = myHub.replace("xxx", repo);
    return myRepo;
}

// for when I want to link to a deployed project.
function azure(siteName){
    var azure = "https://xxx.azurewebsites.net";
    var correctAzure = azure.replace("xxx", siteName);
    return correctAzure;
}


function sprint3(){
    document.getElementById("exercise2").href = azure("sprint3-chapter2");
    document.getElementById("exercise2").title = "Chapter 2";
    document.getElementById("exercise3").href = azure("sprint3-chapter3");
    document.getElementById("exercise2").title = "Chapter 3"
    document.getElementById("exercise4").href = azure("sprint3-chapter4");
    document.getElementById("exercise2").title = "Chapter 4";
}
 */