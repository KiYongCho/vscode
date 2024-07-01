// 이벤트 위임 (event delegation)
// - 상위엘리먼트에 이벤트 처리를 맡김
// - ex) ul밑에 li가 100개가 있다고 가정, 각 li에 이벤트핸들러를 등록?
//       ul이 li에서 발생한 이벤트를 위임받아서 처리

const fruits = document.querySelector("#fruits");

// 이벤트객체의 target을 인자로 전달받음
function activate({target}) {
    // target이 li가 아니면 빠져나감
    if (!target.matches('#fruits > li')) return;
    // li 각각에 대해서 active클래스를 토글(active클래스가 없으면 있도록, 있으면 없앰)
    [...fruits.children].forEach(fruit => {
        fruit.classList.toggle('active', fruit===target);
        console.log(target.id);
    });
}

// 상위인 ul에서 click이벤트가 발생하면 activate함수를 호출
fruits.onclick = activate;