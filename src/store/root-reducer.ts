import { combineReducers } from 'redux';
import { History } from 'history';
import { connectRouter } from 'connected-react-router';
import todosReducer from '../features/todos/reducer';
import countersReducer from '../features/counters/reducer';
import todosTypesafeReducer from '../features/todos-typesafe/reducer';

const rootReducer = (history: History) => combineReducers({
    router: connectRouter(history),
    todos: todosReducer,
    typesafeReducer: todosTypesafeReducer,
    counters: countersReducer,
});

export default rootReducer;
