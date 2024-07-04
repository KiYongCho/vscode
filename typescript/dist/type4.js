/* 타입 호환 (type compatability) */
// 좁은타입의 값이 넓은타입의 값이 되는 것은 OK
// 넓은타입의 값이 좁은타입의 값이 되는 것은 ERROR
// 타입호환의 범위
let s1 = 'hi';
let s2 = 'hello';
//s2 = s1; // 'hello'타입이 string타입보다 좁으므로 ERROR
s1 = s2; // string타입이 'hello'타입보다 넓으므로 OK
let i4 = { name: '홍길동' };
let i5 = { name: '강감찬' };
i4 = i5;
i5 = i4;
let animal5 = { name: '동물' };
let dog5 = { name: '강아지', sound: '왈왈' };
let bird5 = { name: '새', leg: 2 };
// dog5 = bird5; // Dog5는 sound가 있어야 함
// bird5 = dog5; // Bird5는 leg가 있어야 함
// dog5 = animal5; // Animal5는 sound가 있어야 함
// bird5 = animal5 // Animal5는 leg가 있어야 함
animal5 = dog5;
animal5 = bird5;
let dog6 = { name: '강아지', sound: '왈왈' };
let bird6 = { name: '새', leg: 2 };
dog6 = bird6;
bird6 = dog6;
// 함수타입의 타입 호환
let func6 = function (a, b) {
    return a + b;
};
let func7 = function (a) {
    return a;
};
func6 = func7; // func7의 a 파라미터를 잃지 않음
// func7 = func6; // func6의 b 파라미터를 잃어버림
// enum 타입의 타입 호환
// enum 타입은 같은 프라퍼티를 가져도 호환되지 않음
var Enum1;
(function (Enum1) {
    Enum1[Enum1["A"] = 0] = "A";
    Enum1[Enum1["B"] = 1] = "B";
    Enum1[Enum1["C"] = 2] = "C";
})(Enum1 || (Enum1 = {}));
;
var Enum2;
(function (Enum2) {
    Enum2[Enum2["A"] = 0] = "A";
    Enum2[Enum2["B"] = 1] = "B";
    Enum2[Enum2["C"] = 2] = "C";
})(Enum2 || (Enum2 = {}));
;
let e1 = Enum1.A;
let e2 = Enum2.A;
let inter1 = 'string';
let inter2 = 30;
inter1 = inter2;
inter2 = inter1;
let inter3 = { data: 'string' };
let inter4 = { data: 30 };
//inter3 = inter4; // data : number > string (X)
//inter4 = inter3; // data : string > number (X)
