import * as React from 'react';
import { Card } from 'antd'

export interface GenericListProps<T> {
    items: T[];
    itemRenderer: (item: T) => JSX.Element;
}

export class GenericList<T> extends React.Component<GenericListProps<T>, Record<string, unknown>> {
    render() {
        const { items, itemRenderer } = this.props;

        return (
            <Card>
                {items.map(itemRenderer)}
            </Card>
        );
    }
}
