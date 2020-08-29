const { Command } = require('commander');
const program = new Command();
program.version('0.0.1');

program
    .option('-d, --debug', 'output extra debugging')
program
    .command('add <tagName>')
    .description('add a tag')
    .action((tagName) => {
        console.log(`${tagName}`);
    });

program.parse(process.argv);

