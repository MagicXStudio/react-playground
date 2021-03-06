import { RootState } from 'MyTypes';
import React from 'react';
import { connect } from 'react-redux';
import { Diff } from 'utility-types';
import { countersActions, countersSelectors } from '../features/counters';

// These props will be injected into the base component
interface InjectedProps {
    count: number;
    onIncrement: () => void;
}

const WithConnectedCount = <BaseProps extends InjectedProps>(
    BaseComponent: React.ComponentType<BaseProps>
) => {
    const mapStateToProps = (state: RootState) => ({
        count: countersSelectors.getReduxCounter(state.counters),
    });

    const dispatchProps = {
        onIncrement: countersActions.increment,
    };

    type HocProps = ReturnType<typeof mapStateToProps> &
        typeof dispatchProps & {
            // here you can extend ConnectedHoc with new props
            overrideCount?: number;
        };

    class Hoc extends React.Component<HocProps> {
        // Enhance component name for debugging and React-Dev-Tools
        static displayName = `withConnectedCount(${BaseComponent.name})`;
        // reference to original wrapped component
        static readonly WrappedComponent = BaseComponent;

        render() {
            const { count, onIncrement, overrideCount, ...restProps } = this.props;

            return (
                <BaseComponent
                    countx={overrideCount || count} // injected
                    onIncrementx={onIncrement} // injected
                    {...(restProps as BaseProps)}
                />
            );
        }
    }

    const ConnectedHoc = connect<
        ReturnType<typeof mapStateToProps>,
        typeof dispatchProps, // use "undefined" if NOT using dispatchProps
        Diff<BaseProps, InjectedProps>,
        RootState
    >(
        mapStateToProps,
        dispatchProps
    )(Hoc);

    return ConnectedHoc;
};
export default WithConnectedCount;