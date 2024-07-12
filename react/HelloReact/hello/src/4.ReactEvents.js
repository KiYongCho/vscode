// React에서 이벤트 처리

// 1. 유사엘리먼트 내부에 이벤트속성(onChane, onClick 등등)
//    값으로 표현식(콜백함수)를 사용해 이벤트 처리
//    - 유사엘리먼트 : JSX내부에 HTML엘리먼트처럼 사용하는 엘리먼트
//    - 이벤트속성명은 on + 대문자로 시작하는 이벤트타입

// 2. 하위컴포넌트에 onChangeMode라는 속성을 사용해 이벤트 처리

export default function ReactEvents() {
    const message = 'From ReactEvents : ';
    return (
        <>
            <p>
                <a href='http://www.naver.com' onClick={gotoLink}>네이버</a>
            </p>
            <select onChange={selChange}>
                <option value=''>--선택--</option>
                <option value='ko'>한국</option>
                <option value='cn'>중국</option>
                <option value='jp'>일본</option>
            </select>
            <p>
                남성 : <input type='checkbox' name='cb'
                    value='male' onClick={cbClick} />&nbsp;
                여성 : <input type='checkbox' name='cb'
                    value='female' onClick={cbClick} />&nbsp;
            </p>
            <p>
                입력 : <input type='text' onKeyUp={txtChange} />
            </p>
            <Article onChangeMode={
                function(e) {
                    console.log(message + e.target.value);
                }
            } />
        </>
    );

    function gotoLink(e) {
        e.preventDefault();
        window.location.href = 'https://www.google.com';
    }

    function selChange(e) {
        const value = e.target.value;
        if (value) {
            console.log(value);
        }
    }

    function cbClick(e) {
        console.log(e.target.value);
    }

    function txtChange(e) {
        console.log(e.target.value);
    }

} // ReactEvents

function Article(props) {
    return (
        <textarea onKeyUp={props.onChangeMode}></textarea>
    );
}



