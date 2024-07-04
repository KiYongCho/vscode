/* 인터페이스 */
// 객체의 타입을 정의할때 사용

// 인터페이스 정의
interface User {
    name: string;
    age: number;
}

// 객체 생성 (User타입의 객체)
const user1: User = {name: '홍길동', age: 20};

// 함수의 파라미터와 리턴타입으로 인터페이스 사용
function getUserInfo(user: User): User {
    return user1;
}
const user2: User = getUserInfo({name: '강감찬', age: 30});

// 인터페이스 옵셔널 속성
interface User2 {
    name: string;
    age?: number;
}
const user3: User2 = {name: '이순신', age: 40};
const user4: User2 = {name: '이순신'};

// 인터페이스 상속
interface Animal {
    name: string;
    legCnt: number;
}
interface Bird extends Animal {
    hasWing: boolean;
}
const bird1: Bird = {name: '독수리', legCnt: 2, hasWing: true};
//const bird2: Bird = {name: '독수리', legCnt: 2};

// 객체 프라퍼티명으로 숫자를 사용
interface Student {
    [key: number]: string;
}
const student: Student = {1:'홍길동', 2:'강감찬'};

// 객체 프라퍼티명으로 문자를 사용
interface Student2 {
    [key: string]: string;
}
const student2: Student2 = {'1':'홍길동', '2':'강감찬'};

// 배열 인덱스로 숫자 사용
interface Student3 {
    [index: number]: string;
}
const student3: Student3 = ['홍길동', '강감찬'];

// 배열 인덱스로 문자 사용 (불가)
// interface Student4 {
//     [index: string]: string;
// }
// const student4: Student4 = ['홍길동', '강감찬'];


/* 유니언 타입 (union type) */

// 여러 타입 중 하나
let un: string | number;
un = '홍길동';
un = 100;
// un = true;

// 함수 파라미터로 유니언 타입 선언
interface Pen {
    name: string;
    color: string;
}
interface Note {
    name: string;
    pages: number;
}
// type guard : 객체가 가진 프라퍼티로 객체를 식별
function getInfo(obj: Pen | Note): void {
    if ('color' in obj) { // type guard
        console.log(obj.name, obj.color);
    } else if ('pages' in obj) {
        console.log(obj.name, obj.pages);
    }
}
const pen = {name:'볼펜', color: '파랑'};
const note = {name:'연습장', pages: 100};
getInfo(pen);
getInfo(note);


/* 인터섹션(intersection) 타입 */
// 타입 2개 이상을 하나로 합쳐서 사용
interface I1 {
    name: string;
}
interface I2 {
    age: number;
}
interface I3 {
    hobby: string[];
}
const is1: I1 & I2 & I3 = {
    name: '홍길동',
    age: 30,
    hobby: ['축구', '농구']
};


/* 타입 별칭 (alias) */
// - 타입에 대한 별도의 이름
// - 타입코드를 줄일 목적으로 사용
// - 인터페이스는 객체의 타입을 정의하고 상속이 가능하나
//   타입별칭은 모든 타입들을 정의하고 상속이 불가
type myStr = string;
const mystr: myStr = '홍길동';

type myNum = number;
const mynum: myNum = 30;

type myType = string | number | boolean;
const mt1: myType = '홍길동';
const mt2: myType = 30;
const mt3: myType = false;

// 인터페이스의 선언 병합 (declaration merging)
// 인터페이스를 동일한 이름으로 2개 이상 선언하면 프라퍼티들이 합쳐짐
// cf) 타입별칭을 동일한 이름으로 선언 불가
interface Int1 {
    name: string;
}
interface Int1 {
    age: number;
}
const int1: Int1 = {name: '홍길동', age: 30};


/* enum 타입 */

// 여러개의 상수를 정의하기 위한 타입
// 선언된 순서대로 0, 1, 2 ... 의 값을 가짐
enum Planet {
    MERCURY,
    VENUS,
    EARTH,
    MARS
}
const earth: number = Planet.EARTH;
const mars: number = Planet.MARS;

// enum 초기값 할당
enum Planet2 {
    MERCURY = 0,
    VENUS = 1,
    EARTH = 2,
    MARS = 3    
}
enum Planet3 {
    MERCURY = '수성',
    VENUS = '금성',
    EARTH = '헬',
    MARS = '화성'
}

// const enum : js로 변환되는 코드의 양 감소시킨 enum
// const enum Planet4 {
//     MERCURY = '수성',
//     VENUS = '금성',
//     EARTH = '헬',
//     MARS = '화성'
// }


/* 클래스 */
// - 타입스크립트에서는 클래스의 프라퍼티들을 미리 정의해 줘야 함
// - 생성자의 파라미터타입과 메서드의 반환타입을 정의해 줘야 함

class Person {
    name: string;
    age: number;
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
    getName(): string {
        return this.name;
    }
    getAge(): number {
        return this.age;
    }
}
const person1 = new Person('홍길동', 30);

// 접근제어자 
// public : 클래스 내외부에서 접근 가능, 접근제어자 생략시 public
// protected : 클래스 내부 또는 상속받은 클래스 내부에서 접근 가능
// private : 클래스 내부에서 접근 가능 (#, ES2020)
class Person2 {
    #name: string;
    age: number;
    constructor(name: string, age: number) {
        this.#name = name;
        this.age = age;
    }
    getName(): string {
        return this.#name;
    }
    getAge(): number {
        return this.age;
    }    
}
const person2 = new Person2('홍길동', 30);


/* 제네릭 (generic) */
// - 타입을 실행시점에 정의하기 위한 문법
// - 제네릭을 사용하면 반복적인 타입선언을 줄일 수 있다
// - any를 사용하면 어떤 타입도 받을 수 있지만
//   에러방지, 코드자동완성과 같은 타입스크립트의 장점을 살릴 수 없음

function getText<T>(text: T): T {
    return text;
}
getText<string>('hi');
getText<number>(100);

// 인터페이스에 제네릭 사용
interface Animal2<T> {
    name: string;
    body: T
}
const animal1: Animal2<{color: string, legCount: number}> = {
    name: '호랑이',
    body: {color: '얼룩덜룩', legCount: 4}
};

// 제네릭에 제약 부여
// T extends string : string을 상속받는 임의의 타입
function printName<T extends string>(name: T): T {
    return name;
}
printName('홍길동');

// extends : 뒤에 나오는 타입과 호환타입을 허용
// {length: number} : 인터페이스
function lengthOnly<T extends {length: number}>(value: T): number {
    return value.length;
}
lengthOnly('123'); // 문자열은 length프라퍼티를 가지고 있다.
lengthOnly([1,2,3]); // 배열은 length프라퍼티를 가지고 있다.

// 제네릭과 유니온 결합
function lengthOnly2<T extends string | number>(value: T): number {
    if (typeof value === 'string') {
        return value.length;
    }
    return value;
}
lengthOnly2('123');
lengthOnly2(123);

// keyof : 객체 프라퍼티들의 키들을 추출해 문자열 유니언 타입으로 변환
//         = 프라퍼티명과 같은 문자열들만 받겠다!
function printKeys<T extends keyof {name: string; skill: string;}>
    (value: T): void {
        console.log(value);
}
printKeys('name');
printKeys('skill');
//printKeys('hobby');













