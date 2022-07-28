import * as actions from "../actions/todo";
import { handleActions } from "redux-actions";


const initialState = {number:0};

export default handleActions({
    [actions.minus](state, action) {
        return {number: state.number + 1};
    },
    [actions.plus](state, action) {
        return {number: state.number - 1};
    }
}, initialState);
