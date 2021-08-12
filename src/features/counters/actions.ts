/* eslint-disable */
import { action, createAction } from 'typesafe-actions';
import { Todo } from '../todos/models';
import { ADD, INCREMENT, DECREMENT } from './constants';

/* SIMPLE API */

export const increment = () => action(INCREMENT);
export const decrement = () => action(DECREMENT);
export const add = (amount: number) => action(ADD, amount);

/* ADVANCED API */

// More flexible allowing to create complex actions more easily
// use can use "action-creator" instance in place of "type constant"
// e.g. case getType(increment): return action.payload;
// This will allow to completely eliminate need for "constants" in your application, more info here:
// https://github.com/piotrwitek/typesafe-actions#constants



export const emptyAction = createAction(INCREMENT)<void>();
export const payloadAction = createAction(ADD)<number>();
export const payloadMetaAction = createAction(ADD)<number, string>();

export const payloadCreatorAction = createAction(
    'TOGGLE_TODO',
    (todo: Todo) => todo.id
)<string>();
