import * as React from 'react';
import { Button, Tag, Card } from 'antd';
type Props = {
    label: string;
};

type State = {
    count: number;
};

export class ClassCounter extends React.Component<Props, State> {
    readonly state: State = {
        count: 0,
    };
    componentDidMount() {
        console.info('componentDidMount');
    }
    componentDidCatch() {
        console.info('componentDidCatch');
    }
    componentDidUpdate() {
        console.info('componentDidUpdate');
    }
    componentWillMount() {
        console.info('componentWillMount');
    }
    componentWillReceiveProps() {
        console.info('componentWillReceiveProps');
    }
    componentWillUnmount() {
        console.info('componentWillUnmount');
    }
    componentWillUpdate() {
        console.info('componentWillUpdate');
    }

    handleIncrement = () => {
        this.setState({ count: this.state.count + 1 });
    }

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
