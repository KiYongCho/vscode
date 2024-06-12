$(function() {

    let fileNum = 2;

    $("#fileplus").click(function() {
        const newP = document.createElement("P");
        const newInput = document.createElement("INPUT");
        newInput.setAttribute("id", "file" + fileNum++);
        newInput.setAttribute("type", "file");
        newP.appendChild(newInput);
        document.getElementById("filelist").appendChild(newP);
    });

    $("#fileminus").click(function() {
        const filelist = document.getElementById("filelist");
        if (fileNum!=1) {
            filelist.removeChild(filelist.lastChild);
            fileNum--;
        }
    });

});