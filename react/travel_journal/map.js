const nums = [1, 2, 3, 4, 5, 6, 7];

const sqNums = nums.map((num) => num * num);

console.log(sqNums);

const names = ["seraphine", "granvillia", "franka", "rayan"];

const capitalized = names.map(
  (name) => name[0].toLocaleUpperCase() + name.slice(1),
);
console.log(capitalized);

const ped = capitalized.map((cap) => `<p>${cap}</p>`);
console.log(ped);
