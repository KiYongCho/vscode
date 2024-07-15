import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {increment, decrement} from './counterReducer';

const CounterButton = () => {
    // dispatcher
    const dispatch = useDispatch();
    // selector
    const count = useSelector(state => state.counter);
    // 이벤트 콜백함수
    const handleIncrement = () => { dispatch(increment()) };
    const handleDecrement = () => { dispatch(decrement()) };
    return (
        <div>
            <button onClick={handleIncrement}>증가</button>&nbsp;
            <span>{count}</span>&nbsp;
            <button onClick={handleDecrement}>감소</button>&nbsp;
        </div>
    );
}

export default CounterButton;