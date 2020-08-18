console.log('utils.js running!!');

// ! Two types of exports
// 1.`default - Named Exports`
const add = (a, b) => {
  return a + b;
};

// 1.1 `As default` - in imported file we can import name function by any name
const minus = (a, b) => {
  return a - b;
};

// 1.2 `export default`
const num = (a) => {
  return a;
};

// 3. `Direct export`
export const square = (a) => {
  return a * a;
};
export { add, minus as default };
// export default num;
