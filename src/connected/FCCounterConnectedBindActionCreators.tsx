import Types from 'MyTypes';
import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';
import * as React from 'react';
import { countersActions } from '../features/counters';

export const actionCreators = {
    onIncrement: () => ({ type: 'INCREMENT' }),
    onDecrement: () => ({ type: 'DECREMENT' })
};

const mapStateToProps = (state: Types.RootState) => ({
    count: state.counters.reduxCounter,
});

const mapDispatchToProps = (dispatch: Dispatch<Types.RootAction>) => {
    const counterActions = bindActionCreators(actionCreators, dispatch);
    return counterActions;
}

type Props = ReturnType<typeof mapStateToProps> &
    ReturnType<typeof mapDispatchToProps> & {
        label: string;
    };

export const FCCounter: React.FC<Props> = props => {
    const { label, count, onIncrement } = props;

    const handleIncrement = () => {
        const x = onIncrement();
        countersActions.add(1)
        console.log(x);
    };
    return (
        <div>
            <span>
                {label}: {count}
            </span>
            <button type="button" onClick={handleIncrement}>
                {`Increment`}
            </button>
        </div>
    );
};

const FCCounterConnectedBindActionCreators = connect(
    mapStateToProps,
    mapDispatchToProps
)(FCCounter);

export default FCCounterConnectedBindActionCreators;
