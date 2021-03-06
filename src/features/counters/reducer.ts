import { combineReducers } from 'redux';
import { ActionType } from 'typesafe-actions';

import * as counters from './actions';
import { ADD, INCREMENT, DECREMENT } from './constants';

export type CountersAction = ActionType<typeof counters>;

export type CountersState = {
    readonly reduxCounter: number;
};

export default combineReducers<CountersState, CountersAction>({
    reduxCounter: (state = 0, action) => {
        console.log(action);
        switch (action.type) {
            case INCREMENT:
                return state + 1; // action: { type: "INCREMENT"; }
            case DECREMENT:
                return state - 1;
            case ADD:
                return Math.pow(state,2); //action.payload; // action: { type: "ADD"; payload: number; }
            default:
                return state;
        }
    },
});
