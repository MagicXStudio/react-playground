import * as React from 'react';
import { Card, Button, Tag } from 'antd';
type Props = { initialCount: number };

export default function Counter({ initialCount }: Props) {
    const [count, setCount] = React.useState(initialCount);
    return (
        <Card>
            <Button onClick={() => setCount(initialCount)}>Reset</Button>
            <Button onClick={() => setCount(prevCount => prevCount + 1)}>+</Button>
            <Tag> {count}</Tag>
            <Button onClick={() => setCount(prevCount => prevCount - 1)}>-</Button>
        </Card>
    );
}
