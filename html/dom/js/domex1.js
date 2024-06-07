window.onload = function() {
    document.getElementById("btn").addEventListener(
        "click",
        function() {
            const rval = document.getElementById("r").value;
            const gval = document.getElementById("g").value;
            const bval = document.getElementById("b").value;
            document.body.style.backgroundColor = 
                `rgb(${rval}, ${gval}, ${bval})`;
        }
    );
}