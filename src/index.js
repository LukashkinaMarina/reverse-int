module.exports = function reverse(n) {
    const module = Math.abs(n);
    const array = String(module).split("");
    array.reverse();
    return array.join("");
};
