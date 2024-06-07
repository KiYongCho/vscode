function clickBtn() {
    alert("눌렀슈!");
}

function changeBGColor() {
    document.body.style.backgroundColor = 'orange';
}

function changeText() {
    let txt = document.getElementById("txt");
    let result = document.getElementById("result");
    result.innerHTML = txt.value;
}