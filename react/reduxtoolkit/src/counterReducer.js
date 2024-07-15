import {createSlice} from '@reduxjs/toolkit';

const counterSlice = createSlice({
    name: 'counter',    // slice 이름
    initialState: 0,    // state 초기값
    reducers: {         // reducer 들
        increment: state => state + 1,  // increment명령시 state 1 증가
        decrement: state => state - 1   // decrement명령시 state 1 감소
    }
});

export const {increment, decrement} = counterSlice.actions;
export default counterSlice.reducer;