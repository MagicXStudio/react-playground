import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import store, { history } from './store';
import Home from './routes/Home';
import FCCounter from './routes/FCCounter';
import GenericList from './routes/GenericList';
import WithErrorBoundary from './routes/WithErrorBoundary';

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <ConnectedRouter history={history}>
                    <FCCounter />
                    <Home />
                    <GenericList />
                    <WithErrorBoundary/>
                </ConnectedRouter>
            </Provider>
        );
    }
}
export default App;
