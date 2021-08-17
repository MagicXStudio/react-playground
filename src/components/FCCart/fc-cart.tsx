import * as React from 'react';
import { Button, Card, Tag } from 'antd';

type Props = {
    onAddToCart: (id: number) => void;
    label: string;
};

export const FCCart: React.FC<Props> = props => {
    const { onAddToCart, label } = props;
    const handleAddToCart = () => {
        onAddToCart(0);
    };
    return (
        <Card>
            <Tag>{label}</Tag>
            <Button type="primary" onClick={handleAddToCart}>
                {`加入购物车`}
            </Button>
        </Card>
    );
};
