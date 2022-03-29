const diff = (a, b) => [
  ...a.filter((e) => !b.includes(e)),
  ...b.filter((e) => !a.includes(e)),
];

const sym = (...args) => [...new Set(args.reduce(diff))];

console.log(sym([1, 2, 3], [5, 2, 1, 4]));
