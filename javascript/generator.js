// generator
// 제네레이터는 함수를 나누어 수행할때 사용
// 제네레이터 함수는 항상 제네레이터 객체를 리턴
// next()와 yield를 사용해서 다음번수행을 하고 수행결과를 리턴

function* gen() {
    yield 1;
    yield 2;
    yield 3;
}

const genObj = gen();
console.log(genObj.next()); // { value: 1, done: false }
console.log(genObj.next()); // { value: 2, done: false }
console.log(genObj.next()); // { value: 3, done: false }
console.log(genObj.next()); // { value: undefined, done: true }

function* gen2() {
    const a = yield 1;
    const b = yield (a+1);
    const c = yield (b+1);
}

const genObj2 = gen2();
console.log(genObj2.next());
console.log(genObj2.next(1)); // (a+1) => (1+1)
console.log(genObj2.next(2)); // (b+1) => (2+1)
console.log(genObj2.return(3));
