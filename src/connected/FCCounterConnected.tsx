import Types from 'MyTypes';
import { connect } from 'react-redux';

import { countersActions, countersSelectors } from '../features/counters';
import { FCCounter } from '../components/FCCounter/fc-counter';

const mapStateToProps = (state: Types.RootState) => ({
    count: countersSelectors.getReduxCounter(state.counters),
});

const dispatchProps = {
    onIncrement: countersActions.increment,
};

 const FCCounterConnected = connect(
    mapStateToProps,
    dispatchProps
)(FCCounter);

export default FCCounterConnected;
