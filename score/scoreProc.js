// 성적처리 스크립트

const totalPersonArr = [];
let first = false;

$(function() {

    init();

    $("#inputBtn").click(function() {
        if (!$("#sname").val() || !$("#skor").val()
                || !$("#seng").val() || !$("#smath").val()) {
            alert("정보를 입력해 주세요!");
            return false;
        } else {
            const newScore = new Score(
                parseInt($("#skor").val()),
                parseInt($("#seng").val()),
                parseInt($("#smath").val())
            );
            const newPerson = new Person($("#sname").val(), newScore);
            const personArr = getPersonArr(newPerson);
            printScore(personArr, calcScore(personArr));
            
        }
    });

});


// 초기화
function init() {

    const personArr = getPersonArr(null);
    printScore(personArr, calcScore(personArr));

} // init


// 객체 배열 생성해서 반환 
function getPersonArr(newPerson) {

    if (!first) {
        // 3명의 성적 객체 생성
        const hongScore = new Score(100, 90, 80);
        const kangScore = new Score(90, 80, 70);
        const leeScore = new Score(80, 70, 60);

        // 3명의 학생 객체 생성
        const hong = new Person("홍길동", hongScore);
        const kang = new Person("강감찬", kangScore);
        const lee = new Person("이순신", leeScore);

        // newPerson이 있으면 newPerson을 포함한 personArr를 리턴
        totalPersonArr.push(hong);
        totalPersonArr.push(kang);
        totalPersonArr.push(lee);

        first = true;
    }

    if (newPerson) {
        totalPersonArr.push(newPerson);
    }
    return totalPersonArr;    

} // getPersonArr


// 성적 연산 함수
function calcScore(personArr) {

    const summaryArr = [0, 0, 0, 0, 0]; // 국어총점,영어총점,수학총점,총점총점,평균
    const personArrLeng = personArr.length;

    for (let i=0; i<personArrLeng; i++) {
        summaryArr[0] += personArr[i].score.skor;
        summaryArr[1] += personArr[i].score.seng;
        summaryArr[2] += personArr[i].score.smath;
        summaryArr[4] += personArr[i].savg;
    }

    summaryArr[3] += summaryArr[0] + summaryArr[1] + summaryArr[2];
    summaryArr[4] = summaryArr[4] / personArrLeng;
    
    return summaryArr;

} // calcScore


// 성적 출력 함수
function printScore(personArr, summaryArr) {

    $("tbody").empty();
    $("tfoot").empty();

    const personArrLeng = personArr.length;

    for (let i=0; i<personArrLeng; i++) {
        $("tbody").append(`
            <tr>
                <td>${i+1}</td>
                <td>${personArr[i].sname}</td>
                <td>${personArr[i].score.skor}</td>
                <td>${personArr[i].score.seng}</td>
                <td>${personArr[i].score.smath}</td>
                <td>${personArr[i].ssum}</td>
                <td>${personArr[i].savg}</td>
                <td>${personArr[i].srank}</td>
            </tr>
        `);
    }

    $("tfoot").append(`
        <tr>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>${summaryArr[0]}</td>
            <td>${summaryArr[1]}</td>
            <td>${summaryArr[2]}</td>
            <td>${summaryArr[3]}</td>
            <td>${summaryArr[4]}</td>
            <td>&nbsp;</td>
        </tr>    
    `);

} // printScore


