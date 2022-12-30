const fs = require("fs");
const input = fs.readFileSync("./inputs/d3.txt", "utf-8");
const items = input.split("\n");
const chunkSize = 3;
let triplets = [];
for (let i = 0; i < items.length; i += chunkSize) {
  const chunk = items.slice(i, i + chunkSize);
  triplets.push(chunk);
}
const priorities = triplets.map(([first, ...rest]) => {
  for (let i = 0; i < first.length; i++) {
    if (rest.every((s) => s.includes(first[i]))) {
      return first[i];
    }
  }
});
const result = priorities.reduce((a, letter) => {
  return (
    letter.charCodeAt(0) + a + (letter.toLowerCase() === letter ? -96 : -38)
  );
}, 0);
console.log(result);
