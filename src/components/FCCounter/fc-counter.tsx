import * as React from 'react';
import { Tag, Button, Card } from 'antd';
type Props = {
    label: string;
    count: number;
    onIncrement: () => void;
};

export const FCCounter: React.FC<Props> = props => {
    const { label, count, onIncrement } = props;
    const handleIncrement = () => {
        onIncrement();
    };
    return (
        <Card>
            <Tag>
                {label}: {count}
            </Tag>
            <Button type="link" onClick={handleIncrement}>
                {`Increment`}
            </Button>
        </Card>
    );
};
