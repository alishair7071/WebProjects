
import { configureStore, createSlice } from '@reduxjs/toolkit'



const counterSlice = createSlice({
    name: 'counter',
    initialState: { counterVal: 0 },
    reducers: {
        increment: (state, action) => {
            state.counterVal++;
        },
        decrement: (state, action) => {
            state.counterVal--;
        }
    }
});

const counterStore = configureStore({
    reducer: {
        counter: counterSlice.reducer
    }
});

export const counterActions= counterSlice.actions;

export default counterStore;


/*



const INITIAL_VALUE = {
    counter: 0
};

const CounterReducer = (store = INITIAL_VALUE, action) => {
    let newStore = store;
    if (action.type == "INCREMENT") {
        newStore = { counter: store.counter + 1 }
    } else if (action.type == "DECREMENT") {
        newStore = { counter: store.counter - 1 }
    }else{

    }
    return newStore;
}*/