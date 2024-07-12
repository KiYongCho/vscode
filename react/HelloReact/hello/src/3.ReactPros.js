// prop : 컴포넌트의 속성 (= 자바스크립트 객체의 프라퍼티)
// {} : 리액트 표현식(expression)

export default function ReactProps() {
    const greeting = 'Hello React!';
    const menuArr = ['Javascript', 'Typescript', 'React'];
    const menuObj = {
        '1': 'Javascript',
        '2': 'Typescript',
        '3': 'React'
    };
    return (
        <>
            <h1>{greeting}</h1>
            <Article title='제목' content='내용' />
            <Menus content={menuArr} />
            <Menus2 content={menuObj} />
            <p>{1 + 2 + 3}</p>
            <p>{'123'.length}</p>
            <p>{(function(){return 100;})()}</p>
        </>
    );
}

function Article(props) {
    return (
        <article>{props.title} : {props.content}</article>
    );
}

function Menus(props) {
    return (
        <ul>
            <li key='1'>{props.content[0]}</li>
            <li key='2'>{props.content[1]}</li>
            <li key='3'>{props.content[2]}</li>
        </ul>
    );
}

function Menus2(props) {
    return (
        <ul>
            <li key='1'>{props.content['1']}</li>
            <li key='2'>{props.content['2']}</li>
            <li key='3'>{props.content['3']}</li>
        </ul>
    );
}