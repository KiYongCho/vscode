/*
    ### jQuery 메모장 구현
    1. 제목과 내용을 입력하고 등록 버튼을 누르면
       localStorage에 메모객체를 저장한다.
    2. 좌측에는 메모의 리스트를 최신순으로 리스팅하고
       각 메모에는 삭제버튼이 우측에 존재한다.
    3. 삭제버튼을 클릭하면 해당 메모가 삭제되고 리스트가 갱신된다.
    4. 메모리스트의 가장 최근 메모가 우측에 표시된다.
*/
$(function() {
    const memoObj 
    = { "subject": "제목", "content": "내용", "regdate": "등록일시" }
    if (localStorage) {
        localStorage.setItem("memo1", JSON.stringify(memoObj));
        console.log(localStorage.getItem("memo1"));
    }
});
