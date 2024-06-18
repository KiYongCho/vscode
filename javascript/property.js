// 프라퍼티 (property)

const hong = {};

// 프라퍼티 동적 추가
hong.name = "홍길동";
hong.age = 20;
hong.gender = "male";
hong['home-address'] = "지구 어딘가";

// 프라퍼티 값 수정
hong.name = "강감찬";

// 프라퍼티 삭제
delete hong.gender;

// 프라퍼티 리스트 확인
for (let key of Object.keys(hong)) {
    console.log(key, hong[key]);
}

// 프라퍼티 축약
// 프라퍼티명과 프라퍼티에 저장되는 변수명이 같으면
// 하나만 써줌
const name = "이순신";
const age = 30;
const lee = {
    name,
    age
};

// 프라퍼티 리스트 확인
for (let key of Object.keys(lee)) {
    console.log(key, lee[key]);
}

// 계산된 프라퍼티명
const prefix = "person";
let idx = 0;
const obj = {
    [`${prefix}-${++idx}`]: idx,
    [`${prefix}-${++idx}`]: idx,
    [`${prefix}-${++idx}`]: idx
};

// 프라퍼티 리스트 확인
for (let key of Object.keys(obj)) {
    console.log(key, obj[key]);
}

// 메서드 축약
const dog = {
    name: '해피',
    getName: function() {
        return this.name;
    }
};
console.log(dog.getName());

const dog2 = {
    name: '해피',
    getName() {
        return this.name;
    }
};
console.log(dog2.getName());


