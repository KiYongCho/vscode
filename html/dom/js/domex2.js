window.onload = function() {

    let num1Val;
    let num2Val;
    const result = document.getElementById("result");

    function getVal() {
        num1Val = parseInt(document.getElementById("num1").value);
        num2Val = parseInt(document.getElementById("num2").value);
    }

    document.getElementById("plus").addEventListener(
        "click",
        function (event) {
            getVal();
            result.innerHTML = num1Val + num2Val;
        }
    );
    document.getElementById("minus").addEventListener(
        "click",
        function (event) {
            getVal();
            result.innerHTML = num1Val - num2Val;
        }
    );
    document.getElementById("multiply").addEventListener(
        "click",
        function (event) {
            getVal();
            result.innerHTML = num1Val * num2Val;
        }
    );
    document.getElementById("devide").addEventListener(
        "click",
        function (event) {
            getVal();
            result.innerHTML = num1Val / num2Val;
        }
    );

}