const sum = require('./calculator');

function main() {
    console.log("Adding some numbers");
    console.log("Adding 1 to 8");

    console.log(`Result is ${sum(1, 8)}`);
}

main()