// json 실습

// 1. 3명의 학생데이터(학번,이름,국어,영어,수학)를 json배열로 생성
// 2. 데이터가져오기 버튼을 누르면 3명의 데이터를 테이블에 보여준다.
// 3. 총점/평균 버튼을 누르면 3명의 총점/평균을 테이블 우측에 보여준다.

window.onload = function() {

    const students = [
        {"sno": 1, "sname": "홍길동", "kor":100, "eng":90, "math":80, "tot":0, "avg":0},
        {"sno": 2, "sname": "강길동", "kor":90, "eng":80, "math":70, "tot":0, "avg":0},
        {"sno": 3, "sname": "송길동", "kor":80, "eng":70, "math":60, "tot":0, "avg":0}
    ];

    // 데이터가져오기
    document.getElementById("btn").addEventListener("click", function() {
        printData();
    });

    // 총점/평균
    document.getElementById("btn2").addEventListener("click", function() {
        for (let i=0; i<students.length; i++) {
            students[i].tot = 
                students[i].kor + students[i].eng + students[i].math;
            students[i].avg = students[i].tot / students.length;
        }
        printData();
    });

    function printData() {
        const studentsLeng = students.length;
        let trs = "";
        for (let i=0; i<students.length; i++) {
            trs += "<tr>";
            trs += "<td>" + students[i].sno + "</td>"
            trs += "<td>" + students[i].sname + "</td>"
            trs += "<td>" + students[i].kor + "</td>"
            trs += "<td>" + students[i].eng + "</td>"
            trs += "<td>" + students[i].math + "</td>"
            if (students[i].tot > 0) {
                trs += "<td>" + students[i].tot + "</td>"
                trs += "<td>" + students[i].avg + "</td>"
            } else {
                trs += "<td>0</td>"
                trs += "<td>0</td>"
            }
            trs += "</tr>";
        }
        const tbody = document.getElementsByTagName("TBODY")[0];
        tbody.innerHTML = trs;        
    }

}









