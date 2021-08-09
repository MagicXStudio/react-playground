import * as React from 'react';
import { Card, Button } from 'antd';
interface State {
    count: number;
}

type Action = { type: 'reset' } | { type: 'increment' } | { type: 'decrement' };

function reducer(state: State, action: Action): State {
    switch (action.type) {
        case 'increment':
            return { count: state.count + 1 };
        case 'decrement':
            return { count: state.count - 1 };
        case 'reset':
            return { count: 0 };
        default:
            throw new Error();
    }
}

interface CounterProps {
    initialCount: number;
}

function Counter({ initialCount }: CounterProps) {
    const [state, dispatch] = React.useReducer(reducer, {
        count: initialCount,
    });

    return (
        <Card>
            Count: {state.count}
            <Button onClick={() => dispatch({ type: 'reset' })}>Reset</Button>
            <Button onClick={() => dispatch({ type: 'increment' })}>+</Button>
            <Button onClick={() => dispatch({ type: 'decrement' })}>-</Button>
        </Card>
    );
}
export default Counter;
