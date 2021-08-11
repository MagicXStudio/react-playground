import * as React from 'react';
import { Button, Tag, Card } from 'antd';
import { agent, setToken, rangeQueryString, removeKeys, resolveWithDelay, Todos } from '../../api'

type Props = {
    label: string;
};

type State = {
    count: number;
};

export default class ClassCounter extends React.Component<Props, State> {
    readonly state: State = {
        count: 0,
    };
    componentDidMount() {
        rangeQueryString(1, 10);
        console.log(Todos.getAll());
        console.info('componentDidMount');
    }
    componentDidCatch() {
        agent.get('/hello');
        console.info('componentDidCatch');
    }
    componentDidUpdate() {
        setToken('');
        console.info('componentDidUpdate');
    }
    componentWillMount() {
        removeKeys<number>(123, ['toString']);
        console.info('componentWillMount');
    }
    componentWillReceiveProps() {
        resolveWithDelay<number>(100, 1000);
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
