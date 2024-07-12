// Styled Component
// npm install styled-components
// 스타일이 적용된 컴포넌트
// 기존 컴포넌트에 스타일을 적용하기 위해서도 사용
// css속성표기법을 사용할 수도 있고 ``(백틱함수)를 사용하기도 함

import styled from 'styled-components';

export default function ReactStyledComponent() {

    const CommonButton = props => {
        return <button className={props.className}>{props.children}</button>
    }

    const StyledCommonButton = styled(CommonButton)`font-size: 2em`;

    // 동적스타일 변경
    const DynamicButton = props => {
        return <button className={props.className}>{props.children}</button>;
    }
    const StyledDynamicButton = styled(DynamicButton)`
        font-size: ${
            function(props) {
                return props.fs + 'em';
            }
        }
    `;

    return (
        <>
            <CommonButton>CommonButton</CommonButton>
            <StyledCommonButton>StyledCommonButton</StyledCommonButton>
            <NoUseStyledComponent />
            <UseStyledComponent />
            <DynamicButton>DynamicButton</DynamicButton>
            <StyledDynamicButton fs='10'>StyledDynamicButton</StyledDynamicButton>
        </>
    );
}

// css 적용
function NoUseStyledComponent() {
    const style = {
        fontSize: '2em',
        color: 'yellow',
        backgroundColor: 'red'
    };
    return (
        <div style={style}>Hello</div>
    );
}

// styled-component 적용
function UseStyledComponent() {
    // 스타일을 적용한 div
    const StyledDiv = styled.div`
        font-size: 3em;
        color: white;
        background-color: blue;
    `;
    // 기존 컴포넌트에 스타일을 추가한 div
    const StyledDiv2 = styled(StyledDiv)`
        border: 3px dotted yellow;
        text-align: center;
    `;
    return (
        <>
            <StyledDiv>Hello</StyledDiv>
            <StyledDiv2>Hello</StyledDiv2>
        </>
    );
}