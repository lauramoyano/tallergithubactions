console.log("Esto ejecutando la aplicacion")
function sum(a, b) {
  return a + b;
}

function res(a, b) {
  return a - b;
}

function mul(a, b) {
  return a * b;
}

module.exports = {
  sum: sum,
  res: res,
  mul: mul
};
