const R = require("rambda.min.js");

const prefixing = (prefix) => {
    return (suffix) => {
        return (url) => {
            return `${prefix}${url}${suffix}`;
        }
    }
};

const prefixingR = R.curry((prefix, suffix, url) => {
    return `${prefix}${url}${suffix}`;
});

const httpPrefix = prefixing("http://")("/index.html");

console.log(httpPrefix("www.google.com"));
console.log(httpPrefix("www.20min.ch"));
console.log(httpPrefix("www.ch.ch"));
