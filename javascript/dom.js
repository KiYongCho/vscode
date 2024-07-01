// DOM (Document Object Model)

window.onload = function() {

    // id가 stat인 엘리먼트
    //const stat = document.getElementById("stat");
    const stat = document.querySelector("#stat");
    console.log(stat);

    // dataset 조회
    console.log(stat.dataset.userName);
    console.log(stat.dataset.userLevel);

    // dataset 변경
    stat.dataset.userLevel = 'normal';
    console.log(stat.dataset.userLevel);

    const ul = document.querySelector("ul");
    console.log(ul.childNodes.length); // 7 TextNode 포함
    for (const each of ul.childNodes) {
        console.log('==='+each+'===');
    }
    console.log(ul.children.length); // 3 ElementNode만 포함
    for (const each of ul.children) {
        console.log('==='+each+'===');
    }

    // firstChild, lastChild, nextSibling, previousSibling
    // : 모든노드를 다 탐색
    // firstElementChild, lastElementChild, nextElementSibling, previousElementSibling
    // : 엘리먼트노드만 탐색
    console.log(ul.firstChild.nextSibling);
    console.log(ul.firstElementChild);
    console.log(ul.firstElementChild.nextElementSibling);
}


