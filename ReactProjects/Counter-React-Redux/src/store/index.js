
import { createStore } from 'redux'



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
}

const counterStore = createStore(CounterReducer);

export default counterStore;