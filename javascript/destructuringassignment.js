// 구조분해할당 (destructuring assignment)
// 이터러블이나 객체의 구성요소(요소, 프라퍼티)들을 각각의 변수에 나누어 할당
// 1. 이터러블(배열, 문자열, Map, Set, NodeList, HTMLElements) => []
// 2. 객체 => {}

const arr = [1, 2, 3, 4, 5];

const [a, b, c, d, e] = arr;
console.log(a, b, c, d, e); // 1, 2, 3, 4, 5

const [a1, b1, c1] = arr;
console.log(a1, b1, c1); // 1, 2, 3

// 기본값보다 할당된 값이 우선한다. = 할당된 값이 없으면 기본값 사용
const [a2=10, b2=20, c2=30, d2=40, e2=50] = arr;
console.log(a2, b2, c2, d2, e2); // 1, 2, 3, 4, 5

// rest파라미터 사용 : 남은 요소들을 배열로 할당
const [a3, b3, ...c3] = arr;
console.log(a3, b3, c3); // 1, 2, [3, 4, 5]


// 객체 구조분해할당

const person = {
    name: '홍길동',
    age: 30,
    gender: '남',
    address: '지구어딘가'
};

// 객체인 경우는 {} 사용하고 할당할 프라퍼티명을 나열
// const {name, age, gender, address} = person;
// console.log(name, age, gender, address);

// 일부 프라퍼티만 할당
// const {name, address} = person;
// console.log(name, address);

// rest파라미터 사용
// const {name, ...rest} = person;
// console.log(name, rest); // 홍길동, { age: 30, gender: '남', address: '지구어딘가' }

// 복합객체 구조분해할당
const hong = {
    name: '홍길동',
    age: 20,
    hobby: ['축구', '독서', '등산']
};

// const {name, age, hobby} = hong;
// console.log(name, age, hobby);

//const {name, age, hobby} = hong;
//console.log(name, age, hobby);

//const [soccer, reading, climbing] = hobby;
//console.log(soccer, reading, climbing);

// 배열내의 객체 구조분해할당
const persons = [
    {name: '홍길동', age: 20, gender: '남'},
    {name: '유관순', age: 30, gender: '여'}
];

//const [{name}, {gender}] = persons;
//console.log(name, gender); // 홍길동 여

const [, {name, age}] = persons;
console.log(name, age); // 유관순 30



