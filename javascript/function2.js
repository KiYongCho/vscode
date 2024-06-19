// 즉시 실행 함수 (IIFE, Immediately Invoked Function Expression)
(function(){
    const a = 3;
    const b = 5;
    console.log(3 + 5);
}());

(function(a, b){
    console.log(a + b);
}(1, 2));

// 즉시 실행 함수
// (function(a, b){return a + b;}(1, 2)) ===> 실행결과인 3이라는 값(표현식)
const result = (function(a, b){
    return a + b;
}(1, 2));
console.log(result);

// cf) 함수표현식
// function(a, b) {return a + b;} ===> 함수 값(표현식)
const result2 = function(a, b) {
    return a + b;
};
console.log(result2);

// 재귀 함수
// 함수가 자기 자신을 호출, 반드시 종료조건이 있어야 함
function factorial(n) {
    if (n<=1) return 1;
    return n * factorial(n-1);
}
console.log(factorial(1)); // 1
console.log(factorial(3)); // 6
console.log(factorial(10)); // 3628800

// 중첩 함수
// 함수내에 함수를 정의해서 바깥쪽 함수가 안쪽 함수의
// 기능을 독립적으로 사용, 클로져(closure) 생성시 주로 사용
function outer() {
    inner(); // inner함수가 outer함수 블록 상단에 호이스팅됨 (선언이 상단으로 끌어올려짐)
    const o = 'o';
    console.log(o);
    function inner() {
        const i = 'i';
        console.log(i);
    }
    // console.log(i); // i는 inner 함수의 스코프를 가진다
    inner();
}
outer();
// inner();
// outer.inner();


// 콜백(callback) 함수 : 함수(고차함수)의 파라미터로 전달되는 함수
// 콜백함수의 유용성 : 함수(기능)를 함수에 값으로 전달할 수 있어서
//                   함수 상호간의 독립성을 유지할 수 있으며
//                   프로그램 전체를 유연하고 확장성있게 구성할 수 있음
// 고차(higher-order) 함수 : 콜백 함수를 전달 받은 함수
// 콜백 함수는 이벤트처리, AJAX통신, 타이머함수 등에 사용됨
// hofunction 고차함수, f 콜백함수
const hofunction = function(f, str) {
    console.log(f(str));
};
const cbfunction = function(str) {
    return 'cbfunction : ' + str;
};
hofunction(cbfunction, 'hello');

// 배열의 고차함수
// forEach : 배열의 각 요소마다 기능을 수행
// map : 배열의 각 요소에 기능을 수행한 결과 배열을 얻음
// filter : 배열의 각 요소들 중에서 조건을 만족(true)하는 요소들의 배열을 얻음
// reduce : 배열의 요소들에 대한 합계를 얻음

const arr = [1, 2, 3, 4, 5];

const forEachArr = arr.forEach(function(ele) {
    console.log(ele);
});
console.log(forEachArr); // undefined

const mapArr = arr.map(function(ele) {
    return ele ** ele;
});
console.log(mapArr); // [1,4,27,256,3125]

const filterArr = arr.filter(function(ele) {
    return ele % 2;
});
console.log(filterArr); // [1,3,5]

const sum = arr.reduce(function(acc, curr) {
    return acc + curr;
}, 0);
console.log(sum);


// 실습) 배열고차함수
// cf) 문자의 아스키코드값 : 'a'.charCodeAt(0);
// console.log('a'.charCodeAt(0));

const exarr = [1, 'a', 'b', 2, 3, 'c', 4, 'd', 'e', 'f', 5];

// 1) 숫자들의 합 구하기
const sum1 = exarr.reduce(function(acc, curr) {
    if (typeof curr === 'number') {
        return acc + curr;
    } else if (typeof ele === 'string') {
        return acc + 0;
    }
});
console.log(sum1);

// 2) 숫자들은 제곱값으로, 문자들은 아스키코드값으로 변환한 배열 만들기
const resultArr1 = exarr.map(function(ele) {
    if (typeof ele === 'number') {
        return ele * ele;
    } else if (typeof ele === 'string') {
        return ele.charCodeAt(0);
    }
});
console.log(resultArr1);

// 3) 문자들 중에서 아스키코드값이 홀수인 것들의 배열 만들기
const resultArr2 = exarr.filter(function(ele) {
    if (typeof ele === 'string') {
        return ele.charCodeAt(0) % 2 == 1;
    }
});
console.log(resultArr2);

// 4) 숫자는 문자로, 문자는 숫자(아스키코드값)로 변환한 배열 만들기
const resultArr3 = exarr.map(function(ele) {
    if (typeof ele === 'number') {
        return String(ele); // ele.toString(), ''+ele, ""+ele
    } else if (typeof ele === 'string') {
        return ele.charCodeAt(0);
    }
});
console.log(resultArr3);

// 5) 모든 숫자와 모든 문자들의 아스키코드값의 합계 구하기 (reduce 사용)
const sum2 = exarr.reduce(function(acc, curr) {
    if (typeof curr === 'number') {
        return acc + curr;
    } else if (typeof curr === 'string') {
        return acc + curr.charCodeAt(0);
    }
});
console.log(sum2);

// 실습) 배열고차함수 - JSON

const jsonArr = [
    {"name": "홍길동", "age": 38, "gender": "M", "email": "hong@hong.com"},
    {"name": "유관순", "age": 18, "gender": "F", "email": "ryu@ryu.com"},
    {"name": "이순신", "age": 62, "gender": "M", "email": "lee@lee.com"},
    {"name": "신사임당", "age": 25, "gender": "F", "email": "sin@sin.com"},
    {"name": "장보고", "age": 45, "gender": "M", "email": "jang@jang.com"}
];

// 1) 각 사람의 나이에 1을 더한 이름과 나이를 출력
jsonArr.forEach(function(obj) {
    console.log(obj.name, obj.age+1);
    // obj.age += 1;
    // console.log(obj);
});

// 2) 성별을 M은 남자로 F는 여자로 변환한 배열 생성
const rArr1 = jsonArr.map(function(obj) {
    obj.gender = obj.gender=='M' ? '남자' : '여자';
    return obj;
});
console.log(rArr1);

// 3) 나이가 30이하인 사람들만 추출해서 배열 생성
const rArr2 = jsonArr.filter(function(obj) {
    if (obj.age <= 30) return obj;
});
console.log(rArr2);

// 4) 이메일주소의 @ 앞부분이 4자리 이상인 사람들만 추출해서 배열 생성
const rArr3 = jsonArr.filter(function(obj) {
    if (obj.email.substring(0, obj.email.indexOf('@')).length >= 4) {
        return obj;
    };
});
console.log(rArr3);

// 5) 각 사람들의 나이의 합계를 출력
const agesum = jsonArr.reduce(function(acc, obj){
    return acc + obj.age;
}, 0);
console.log(agesum);


// 실습) 고차함수 - AJAX로 데이터 불러와서 실습해 주셈! (AXIOS 라이브러리 사용)
//       https://jsonplaceholder.typicode.com/users

const axios = require('axios');
axios(
  {
    method: 'get',
    url: 'https://jsonplaceholder.typicode.com/users'
  })
  .then(function (response) {
      test(response.data);
  }
);

const test = function(dataArr) {

    // 1. '.net' 이메일을 사용하는 사용자들만 추출해서 배열 생성
    const arr1 = dataArr.filter(function(obj) {
        if (obj.email.indexOf('\.net') > 0) {
            return obj;
        }
    });
    console.log(arr1);

    // 2. 회사이름에 "Romaguera"가 포함된 사용자들만 추출해서 배열 생성
    const arr2 = dataArr.filter(function(obj) {
        if (obj.company.name.includes('Romaguera')) {
            return obj;
        }
    });
    console.log(arr2);

    // 3. "Gwenborough" 도시에 사는 모든 사용자의 id의 합계를 출력
    const idsum = dataArr.reduce(function(acc, obj) {
        if (obj.address.city === 'Gwenborough') {
            return acc + parseInt(obj.id);
        } else {
            return acc + 0;
        }
    }, 0);
    console.log(idsum);

    // 4. id가 홀수인 사용자들 중에 lat과 lng의
    // 합이 0 이상인 사용자들의 배열
    const arr3 = dataArr.filter(function(obj) {
        if (obj.id % 2 == 1 && 
                (parseFloat(obj.address.geo.lat)
                    + parseFloat(obj.address.geo.lng) >= 0)) {
            return obj;
        }
    });
    console.log(arr3);

    // 5. id가 홀수인 사용자들 중에 이메일주소의 @문자 뒤의 글자가 4이상인
    //    사용자들 중에서 zipcode가 7글자 이하인 사용자들의 배열
    const arr4 = dataArr.filter(function(obj) {
        if (obj.id % 2 == 1
                && obj.email.substring(obj.email.indexOf('@')+1).length >= 4
                && obj.address.zipcode.length <= 7) {
            return obj;
        }
    });
    console.log(arr4);

};