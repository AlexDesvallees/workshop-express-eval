let chalk = require('chalk');

const app = require('./src/app');

// port
const port = app.listen(process.argv[2]);

app.get('/bingo', function(req, res) {
    res.status(200);
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify("Bingo"));
});

// start server here
console.log(chalk.green('Hello web server'));