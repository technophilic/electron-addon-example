const testAddon = require('./testaddon.node');
console.log("hello world");

console.log('addon',testAddon);
console.log('hello ', testAddon.hello());
console.log('add ', testAddon.add(5, 10));