window.onload = function() {
    document.getElementById("rBtn").addEventListener(
        "click",
        function() {
            const svg = document.getElementById("rectsvg");
            const rect = document.getElementById("rect");
            rect.setAttribute("x",  document.getElementById("rx").value);
            rect.setAttribute("y",  document.getElementById("ry").value);
            rect.setAttribute("width",  document.getElementById("rw").value);
            rect.setAttribute("height",  document.getElementById("rh").value);
            rect.setAttribute("stroke",  "red");
            rect.setAttribute("stroke-width",  "6");
            rect.setAttribute("fill",  "yellow");
            svg.appendChild(rect);
            document.getElementById("wrapper").appendChild(svg);
        }
    );
}