import { createStore, combineReducers } from 'redux';


store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    console.log(visibleExpenses);
})

const expenseOne = store.dispatch(addExpense({description:'Rent', amount: 100, createdAt: -211000}));
const expenseTwo = store.dispatch(addExpense({description:'Coffee', amount: 300, createdAt: -1000}));
store.dispatch(sortByDate());
