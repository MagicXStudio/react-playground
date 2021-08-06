import * as React from 'react';
import { Tag, Button } from 'antd';
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
        <div>
            <Tag>
                {label}: {count}
            </Tag>
            <Button type="link" onClick={handleIncrement}>
                {`Increment`}
            </Button>
        </div>
    );
};
