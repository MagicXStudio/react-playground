import { routerActions } from 'connected-react-router';
import * as todosActions from '../features/todos/actions';
import * as countersActions from '../features/counters/actions';
import * as cartsActions from '../features/cart/actions';

export default {
    router: routerActions,
    todos: todosActions,
    counters: countersActions,
    carts: cartsActions
};
