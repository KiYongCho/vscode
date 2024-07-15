import {configureStore} from '@reduxjs/toolkit';
import counterReducer from './counterReducer';

// counter라는 리듀서를 가진 store
const store = configureStore({
    reducer: {
        counter: counterReducer
    }
});

export default store;