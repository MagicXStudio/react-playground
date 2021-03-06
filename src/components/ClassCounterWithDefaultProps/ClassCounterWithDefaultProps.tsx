import * as React from 'react';
import { Button, Tag, Card } from 'antd';
type Props = {
    label: string;
    initialCount: number;
};

type State = {
    count: number;
};

export default class ClassCounterWithDefaultProps extends React.Component<
    Props,
    State
> {
    static defaultProps = {
        initialCount: 0,
    };

    readonly state: State = {
        count: this.props.initialCount,
    };

    handleIncrement = () => {
        this.setState({ count: this.state.count + 1 });
    };

    render() {
        const { handleIncrement } = this;
        const { label } = this.props;
        const { count } = this.state;

        return (
            <Card>
                <Tag>
                    {label}: {count}
                </Tag>
                <Button type="primary" onClick={handleIncrement}>
                    {`Increment`}
                </Button>
            </Card>
        );
    }
}
