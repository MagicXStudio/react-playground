import Types from 'MyTypes';
import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';
import * as React from 'react';
import { Card, Button, Tag, InputNumber } from 'antd';

export const actionCreators = {
    onIncrement: () => ({ type: 'counters/INCREMENT' }),
    onDecrement: () => ({ type: 'counters/DECREMENT' }),
    onAdd: (value: number) => ({ type: 'counters/ADD' }),
};

const mapStateToProps = (state: Types.RootState) => ({
    count: state.counters.reduxCounter,
});

const mapDispatchToProps = (dispatch: Dispatch<Types.RootAction>) => bindActionCreators(actionCreators, dispatch);

type Props = ReturnType<typeof mapStateToProps> &
    ReturnType<typeof mapDispatchToProps> & {
        label: string;
    };

export const FCCounter: React.FC<Props> = props => {
    const { label, count, onIncrement, onDecrement, onAdd } = props;
    return (
        <Card>
            <Tag>
                {label}: {count}
            </Tag>
            <Button type="primary" onClick={onIncrement}>
                {`+ Increment`}
            </Button>
            <Button type="primary" onClick={onDecrement}>
                {`- Decrement`}
            </Button>
            <InputNumber value={count}></InputNumber>
            <Button type="primary" onClick={() => { onAdd(10) }}>
                {`Math.pow`}
            </Button>
        </Card>
    );
};

const FCCounterConnectedBindActionCreators = connect(
    mapStateToProps,
    mapDispatchToProps
)(FCCounter);

export default FCCounterConnectedBindActionCreators;
