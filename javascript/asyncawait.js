// async / await
// async : 비동기 함수 선언하는 키워드
// await : 비동기 함수내에서 블락킹(수행종료까지 대기)하는 키워드
// await은 async함수 내에서만 사용 가능

// 비동기 함수내에서 동기(직렬) 처리
// async function afunc() {
//     const a = await new Promise(resolve => setTimeout(() => resolve(1), 3000));
//     const b = await new Promise(resolve => setTimeout(() => resolve(2), 2000));
//     const c = await new Promise(resolve => setTimeout(() => resolve(3), 1000));
//     console.log([a, b, c]);
// }
// const now = Date.now();
// afunc()
// .then(() => console.log(Date.now() - now)); // 대략 6초

// // 비동기 함수내에서 비동기(병렬) 처리
// async function afunc2() {
//     const result = await Promise.all([
//         new Promise(resolve => setTimeout(() => resolve(1), 3000)),
//         new Promise(resolve => setTimeout(() => resolve(2), 2000)),
//         new Promise(resolve => setTimeout(() => resolve(3), 1000))
//     ]);
//     console.log(result);
// }
// const now2 = Date.now();
// afunc2()
// .then(() => console.log(Date.now() - now2)); // 대략 3초

// await 선택적 사용
const afunc3 = async function(x) {
    let sum = 0;
    sum += await x + 1; // 2
    // 즉시실행함수는 동기/비동기 영향을 받지 않음
    // 즉시실행함수 앞에 await을 사용하는건 아무 의미가 없음
    sum += setTimeout(() => (() => {
        console.log(x);
        return x * 2;
    })(), 3000); // 4
    sum += await x + 1; // 6
    console.log(sum);
};
afunc3(1);
