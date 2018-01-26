let chalk = require('chalk');

const app = require('./src/app');

// port
const port = app.listen(process.argv[2]);
console.log(process.argv[2].toString())

// start server here
console.log(chalk.green('Hello web server'));