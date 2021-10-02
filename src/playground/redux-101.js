import { createStore } from 'redux';

// Action generators - functions that return action objects

const incrementCount = ({ incrementBy = 1} = {}) => ({
    type: 'INCREMENT',
    incrementBy
});

const decrementCount = ({ decrementBy = 1} = {}) => ({
    type: 'DECREMENT',
    decrementBy
});

const setCount = ({ count }) => ({
    type: 'SET',
    count
})

const resetCount = () => ({
    type: 'RESET'
})

// Reducers
// Rule 1. Reducers are pure functions (outputs are only determined by input)
// Rule 2. Never change state or action

const countReducer = (state = { count:0 }, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {
                count: state.count + action.incrementBy
            };
        case 'DECREMENT':
            return {
                count: state.count - action.decrementBy
            };
        case 'RESET':
            return {
                count: 0
            };
        case 'SET':
            return {
                count: action.count
            };
        default:
            return state;
    }
};

const store = createStore(countReducer);

const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
})

// increment count
// store.dispatch({
//     type: 'INCREMENT',
//     incrementBy: 5
// });
// used for surfacing errors
store.dispatch(incrementCount({ incrementBy: 5 }));
store.dispatch(incrementCount());

// decrement count
store.dispatch(decrementCount());

store.dispatch(resetCount());
// store.dispatch({
//     type: 'RESET'
// });

store.dispatch(setCount({ count: 5 }));
//store.dispatch({
//    type: 'SET',
//    count: 101
//});