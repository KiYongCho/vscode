// Context API
// 전역상태관리를 위한 API
// useState를 통해서 컴포넌트단위의 상태관리를 한다면
// Context API를 통해서는 하위컴포넌트 전체의 상태관리를 하게됨
// createContext로 컨텍스트를 생성한 후 useContext 훅을 사용

import {createContext, useContext} from 'react';

const obj = {
    name: '홍길동',
    age:  20
}

// 컨텍스트 생성
const context = createContext(obj);

export default function ReactContextAPI() {
    // useContext훅 생성
    const useCon = useContext(context);
    return (
        <GrandParentComponent />
    );
}

function GrandParentComponent() {
    const useCon = useContext(context);
    return (
        // context제공자 생성
        // context.Provider 내부의 컴포넌트부터
        // 컨텍스트가 value의 적용을 받게 됨
        <context.Provider value={{name: '강감찬', age: 30}}>
            <div id='grandParent'>
                <p>GrandParentComponent : {useCon.name} {useCon.age}</p>
                <ParentComponent />
            </div>
        </context.Provider>
    );
}

function ParentComponent() {
    const useCon = useContext(context);
    return (
        <context.Provider value={{name: '이순신', age: 50}}>
            <div id='parent'>
                <p>ParentComponent : {useCon.name} {useCon.age}</p>
                <ChildComponent />
            </div>
        </context.Provider>
    );
}

function ChildComponent() {
    const useCon = useContext(context);
    return (
        <div id='child'>
            <p>ChildComponent : {useCon.name} {useCon.age}</p>
        </div>
    );
}
