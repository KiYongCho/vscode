// 기본타입, 참조타입 복사

// 기본타입 복사
// 값 자체가 복사됨, 값 2개
let message = "Hello";
let message_cp = message;
console.log(message);
console.log(message_cp);

message_cp = "Hi";
console.log(message); // Hello
console.log(message_cp); // Hi

// 참조타입 복사
// 참조값만 복사됨, 참조값 1개, 객체 1개
const hong = { name: "홍길동" };
const hong_cp = hong;
console.log(hong.name);
console.log(hong_cp.name);

hong_cp.name = "강감찬";
console.log(hong.name); // 강감찬
console.log(hong_cp.name); // 강감찬

// a와 b가 가리키는 객체가 같은 객체
let a = {};
let b = a;
console.log(a==b);  // true
console.log(a===b); // true

// a와 b가 가리키는 객체가 다른 객체
let a2 = {};
let b2 = {};
console.log(a2==b2); // false
console.log(a2===b2); // false

// shallow copy, 객체 복제, 객체 2개
// Object.assign(빈객체, 복사할객체);
let user = {
    name: "유관순",
    age: 30
};
let user_clone = Object.assign({}, user);
user_clone.name = "이순신";
console.log(user.name);
console.log(user_clone.name);
console.log(user==user_clone);  // false
console.log(user===user_clone); // false

// lodash를 활용한 deep copy
// https://lodash.com/
var _ = require('lodash');
var objects = [
    {'a': 1},
    {'b':2}
];
var shallow = _.cloneDeep(objects);
console.log(shallow===objects);
