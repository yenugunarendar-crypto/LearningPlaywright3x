// Use the promises API for cleaner async/await flow (Node 17+)
const readline = require("readline/promises");
const { stdin: input, stdout: output } = require("process");

const rl = readline.createInterface({ input, output });

const greeting = "Hello";

async function main() {
  try {
    let name = await rl.question("Enter your name: ");
    name = (name || "").trim();
    if (!name) {
      console.log("No name entered.");
    } else {
      console.log(`${greeting} ${name}`);
    }
  } catch (err) {
    console.error("Error reading input:", err);
  } finally {
    rl.close();
  }
}

main();
