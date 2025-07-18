console.log("Hello");
console.log("World");

// You can print without newline (\n) and control spacing, formatting, etc.
// You have to manually add \n for new lines
process.stdout.write("Hello");
process.stdout.write("World\n");

// for printing table
console.table({city : "Jaipur"});