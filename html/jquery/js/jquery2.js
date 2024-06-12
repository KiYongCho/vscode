$(function() {

    // 전체선택자 (전체 엘리먼트)
    $("*").css("background-color", "orange");

    // id선택자
    $("#ul1").css("font-size", "30px");

    // class선택자
    $(".first").css("font-weight", "bold");

    // 첫번째 ul의 첫번째 자식선택자
    $("ul li:first").css("color", "blue");

    // ul마다 첫번째 자식선택자
    //$("ul li:first-child").css("color", "blue");

    // 속성선택자
    $("[href]").css("font-style", "italic");
    $("a[href='http://www.google.com']").css("font-size", "5em");
    $("a[href!='http://www.google.com']").css("font-size", "3em");

    // 버튼선택자 (<input type="button"> & <button>)
    $(":button").css("border-width", "10px");
    $("input[type='button']").css("color", "yellow");
    $("button").css("color", "gray");

    // even(짝수), odd(홀수)
    $("tr:even").css("font-size", "20px");
    $("tr:odd").css("font-size", "30px");

    // 메소드체이닝 (메소드를 연결해서 순차적으로 수행)
    $("td")
        .css("background-color", "white")
        .css("border-width", "5px")
        .css("color", "red")
        .css("width", "50px");

    // 다중선택자
    $("li, a").css("text-decoration", "underline");

});