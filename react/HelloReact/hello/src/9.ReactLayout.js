// SPA (Single Page Application)

import './css/ReactLayout.css';

const contents = [
    'Javascript contents',
    'Typescript contents',
    'React contents'
];

export default function ReactLayout() {
    const titleText = 'My React SPA Website';
    const menus = ['Javascript', 'Typescript', 'React'];
    const footerText = 'Copyright (c) 2024 All right reserverd 이츠미';
    return (
        <div id='wrapper'>
            <Header titleText={titleText} />
            <Nav menus={menus} />
            <Content contents={contents[0]} />
            <Footer footerText={footerText} />
        </div>
    );
}

function Header(props) {
    return (
        <header>
            <h1>{props.titleText}</h1>
        </header>
    );
}

function Nav(props) {
    return (
        <nav>
            <ul>
                {props.menus.map(
                    (menu, index) =>
                        <li data-index={index} key={index} onClick={changeMenu}>{menu}</li>
                )}
            </ul>
        </nav>
    );
    function changeMenu(event) {
        document.querySelector('#content').textContent
            = contents[event.target.dataset.index];
    }
}

function Content(props) {
    return (
        <div id='content'>{props.contents}</div>
    );
}

function Footer(props) {
    return (
        <footer>{props.footerText}</footer>
    );
}












