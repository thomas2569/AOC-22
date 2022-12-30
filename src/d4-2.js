const fs = require("fs");
const input = fs.readFileSync("./inputs/d4.txt", "utf-8");
const items = input.split("\n");
const result = items.reduce((a, item) => {
  const [left, right] = item.split(",").map((elf) => {
    return elf.split("-").map((n) => parseInt(n));
  });
  if (
    (left[1] >= right[0] && left[0] <= right[0]) ||
    (right[1] >= left[0] && right[0] <= left[0])
  ) {
    return a + 1;
  } else {
    return a;
  }
}, 0);
console.log(result);
