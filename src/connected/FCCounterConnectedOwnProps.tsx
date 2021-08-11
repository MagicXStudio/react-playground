import Types from 'MyTypes';
import { connect } from 'react-redux';

import { countersActions, countersSelectors } from '../features/counters';
import { FCCounter } from '../components/FCCounter/fc-counter';

type OwnProps = {
    initialCount?: number;
};

const mapStateToProps = (state: Types.RootState, ownProps: OwnProps) => ({
    count:countersSelectors.getReduxCounter(state.counters) +(ownProps.initialCount || 0),
});

const mapDispatchToProps = {
    onIncrement: countersActions.increment,
};

const FCCounterConnectedOwnProps = connect(
    mapStateToProps,
    mapDispatchToProps
)(FCCounter);

export default FCCounterConnectedOwnProps;
