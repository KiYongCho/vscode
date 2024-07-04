/* 타입 호환 (type compatability) */
// 좁은타입의 값이 넓은타입의 값이 되는 것은 OK
// 넓은타입의 값이 좁은타입의 값이 되는 것은 ERROR

// 타입호환의 범위
let s1: string = 'hi';
let s2: 'hello' = 'hello';
//s2 = s1; // 'hello'타입이 string타입보다 좁으므로 ERROR
s1 = s2; // string타입이 'hello'타입보다 넓으므로 OK

// 구조적 타이핑 (structural typing)
// 타입이 무엇인지가 중요한 것이 아니라 타입이 가지는 프라퍼티명과
// 프라퍼티의 타입이 중요
interface I4 {
    name: string;
}
interface I5 {
    name: string;
}
let i4: I4 = {name: '홍길동'};
let i5: I5 = {name: '강감찬'};
i4 = i5;
i5 = i4;

interface I6 {
    name: number;
}
//i4 = i6;
//i6 = i4;

// 객체간 타입 호환
// 할당받는 측의 타입을 만족해야 호환
interface Animal5 {
    name: string;
}
interface Dog5 {
    name: string;
    sound: string;
}
interface Bird5 {
    name: string;
    leg: number;
}
let animal5: Animal5 = {name: '동물'};
let dog5: Dog5 = {name: '강아지', sound: '왈왈'};
let bird5: Bird5 = {name: '새', leg: 2};
// dog5 = bird5; // Dog5는 sound가 있어야 함
// bird5 = dog5; // Bird5는 leg가 있어야 함
// dog5 = animal5; // Animal5는 sound가 있어야 함
// bird5 = animal5 // Animal5는 leg가 있어야 함
animal5 = dog5;
animal5 = bird5;

// 옵셔널을 활용한 타입호환
interface Dog6 {
    name: string;
    sound?: string;
}
interface Bird6 {
    name: string;
    leg?: number;
}
let dog6: Dog6 = {name: '강아지', sound: '왈왈'};
let bird6: Bird6 = {name: '새', leg: 2};
dog6 = bird6;
bird6 = dog6;

// 함수타입의 타입 호환
let func6 = function(a:number, b:number): number {
    return a + b;
};
let func7 = function(a:number): number {
    return a;
}
func6 = func7; // func7의 a 파라미터를 잃지 않음
// func7 = func6; // func6의 b 파라미터를 잃어버림

// enum 타입의 타입 호환
// enum 타입은 같은 프라퍼티를 가져도 호환되지 않음
enum Enum1 {A, B, C};
enum Enum2 {A, B, C};
let e1: Enum1 = Enum1.A;
let e2: Enum2 = Enum2.A;
// e1 = e2;
// e2 = e1;

// 제네릭의 타입 호환
// 제네릭은 트랜스파일 타임이 아니라 실행 타임에
// 타입체크가 가능하므로 트랜스파일시에는 에러감지 불가
interface In1<T> {
}
let inter1:In1<string> = 'string';
let inter2:In1<number> = 30;
inter1 = inter2;
inter2 = inter1;

interface In2<T> {
    data: T
}
let inter3:In2<string> = {data: 'string'};
let inter4:In2<number> = {data: 30};
//inter3 = inter4; // data : number > string (X)
//inter4 = inter3; // data : string > number (X)
