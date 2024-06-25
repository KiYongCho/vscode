/* this */

// this : 현재 메모리에서 참조되고 있는 객체 자신
// this binding : this 식별자와 this가 가리키는 객체를 묶는 것

// 객체리터럴에 정의된 메소드 내에서의 this는 메소드를 호출한 객체

// 생성자함수 내에서의 this는 생성자함수가 생성할 객체

// 자바스크립트의 this는 함수호출방식에 따라서 가리키는 객체가 결정됨
// = 동적바인딩 (dynamic binding)

// 전역에서 this
// 1) 웹브라우져 환경이면 this는 window
// 2) 노드 환경이면 this는 global 또는 globalThis

// 함수선언문 내에서 this는 전역객체
// (단, strict mode일때는 함수선언문에서 this는 undefined)

// 콜백함수가 일반함수로 호출되면 콜백함수내의 this는 전역객체

// 메소드 내에 있는 일반함수의 this는 전역객체
// 메소드 내에 있는 일반함수의 this를 메소드를 호출한 객체로 바인딩하려면...
// 1) 일반함수 바깥에서 다른 변수에 this를 담아서 다른 변수를 일반함수 안에서 사용
// 2) call, apply, bind메서드로 일반함수내의 this를 메소드 호출객체로 바인딩해준다.
// 3) 일반함수 말고 화살표함수를 사용하면 화살표함수내의 this는 메소드를 호출한 객체


////////////////
// node 환경에서
////////////////

// 전역스코프에서의 this
console.log(this); // {}

// 일반함수(선언적함수)에서의 this
function add(a, b) {
    console.log(this); // global
    return a + b;
}
add(3,5);

// 생성자함수에서의 this
function Person(name, age) {
    this.name = name;
    this.age = age;
    console.log(this); // new Person('홍길동', 30)
};
const person = new Person('홍길동', 30);

// 메소드내에서의 this
const hong = {
    name: '홍길동',
    age: 30,
    printThis() {
        console.log(this); // hong객체
    }
};
hong.printThis();

// 콜백함수내에서의 this
const kang = {
    name: '강감찬',
    age: 20,
    printThis() {

        console.log(this.name); // 강감찬
        const that = this;

        // 콜백함수내에서의 this는 전역객체
        setTimeout(function() {
            console.log(this.name); // undefined
        }, 100);

        // 메소드에서 this를 that에 담아서 that을 통해 kang객체와 this를 바인딩
        setTimeout(function() {
           cons ole.log(that.name); // 강감찬
        }, 100);

        // bind메소드를 사용해 콜백함수내의 kang객체와 this를 바인딩
        setTimeout(function() {
            console.log(this.name); // 강감찬
        }.bind(this), 100);

        // 콜백함수를 화살표 함수를 사용하면 콜백함수내의 this문제가 해결됨
        // => 콜백함수내의 this는 콜백함수를 호출한 객체
        setTimeout(() => console.log(this.name), 100);

    }
};
kang.printThis();

/*
    이벤트핸들러내에서의 this는 이벤트타겟객체

    // btn:이벤트타겟객체, onclick:이벤트속성, 이벤트명:click
    // function(){}:이벤트핸들러(=이벤트리스너)
    btn.onclick = function() {
        console.log(this); // btn
    };
*/



