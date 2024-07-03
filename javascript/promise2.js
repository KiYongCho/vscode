// Promise 실습
// 1. 비동기호출 : https://jsonplaceholder.typicode.com/albums/11
// 2. id가 11인 앨범의 userId를 Promise로 구한다.
// 3. 비동기호출 : https://jsonplaceholder.typicode.com/users/2
// 4. userId가 2인 사용자의 username과 email을 Promise로 구한다. 
// 결과출력 : Antonette Shanna@melissa.tv

const get = url => {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', url);
        xhr.send();
        xhr.onload = () => {
            if (xhr.readyState==4 && xhr.status==200) {
                resolve(JSON.parse(xhr.response));
            } else {
                reject(`${xhr.status} ${xhr.statusText}`);
            }
        };
    });
};

// 방법 1) Promise 체이닝
get(`http://jsonplaceholder.typicode.com/albums/11`)
.then(({userId}) => get(`http://jsonplaceholder.typicode.com/users/${userId}`))
.then(({username, email}) => {
    document.querySelector("#result").innerHTML = username + " " + email;
})
.catch(err => console.error(err));

// 방법 2) async/await
(async () => {
    const album = await get(`http://jsonplaceholder.typicode.com/albums/11`);
    const user = await get(`http://jsonplaceholder.typicode.com/users/${album.userId}`);
    document.querySelector("#result").innerHTML
        = user.username + " " + user.email;
})();



