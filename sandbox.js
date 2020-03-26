const chalk = require("chalk");
const log = console.log;

function colourLogger(text, colour = "white", isBold = false) {
    if (isBold) {
        log(chalk.bold.keyword(colour)(" %s"), text);
        return;
    }
    log(chalk.keyword(colour)(" %s"), text);
}

colourLogger("AAAAA", "orange");