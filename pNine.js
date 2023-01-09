module.exports = ( str, quot = str.length) => {
    return `${str}${"!".repeat(quot)}`;
}