// main.js

// 전역스코프
var x = 10;
let y = 20;
const z = 30;
const func = () => {
    console.log('main.js');
};

console.log(x);
console.log(y);
console.log(z);
func();

