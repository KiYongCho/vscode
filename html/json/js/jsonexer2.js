window.onload = function() {

    document.getElementById("btn").addEventListener("click", function() {
        const students = [
            {"sno": 1, "sname": "홍길동", "kor":100, "eng":90, "math":80},
            {"sno": 2, "sname": "강길동", "kor":90, "eng":80, "math":70},
            {"sno": 3, "sname": "송길동", "kor":80, "eng":70, "math":60}
        ];

        const studentsLeng = students.length;

        let trs = "";
        for (let i=0; i<students.length; i++) {
            trs += "<tr>";
            trs += "<td>" + students[i].sno + "</td>"
            trs += "<td>" + students[i].sname + "</td>"
            trs += "<td>" + students[i].kor + "</td>"
            trs += "<td>" + students[i].eng + "</td>"
            trs += "<td>" + students[i].math + "</td>"
            trs += "</tr>";
        }
        const tbody = document.getElementsByTagName("TBODY")[0];
        tbody.innerHTML = trs;
    });

}









