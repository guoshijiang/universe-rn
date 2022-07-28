import { createSelector } from 'reselect'
export const todoSelector = (state) => state.todo || 0;

export const getTodoSelector= createSelector(
    todoSelector,
    todoSelector,
    (todo,todo2) => {

        return todo;
    })
