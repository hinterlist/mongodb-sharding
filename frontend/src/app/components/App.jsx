import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect,
} from 'react-router-dom';

import { Container } from 'semantic-ui-react';
import Navigation from './Navigation';

import { ApolloProvider } from '../../providers';
import { BookingPage, UsersPage } from '../../pages';

const App = () => {
    return (
        <div>
            <ApolloProvider>
                <Router>
                    <Navigation />
                    <Container text style={{ marginTop: '7em' }}>
                        <Switch>
                            <Route path="/bookings">
                                <BookingPage />
                            </Route>
                            <Route path="/users">
                                <UsersPage />
                            </Route>
                            <Route path="/">
                                <Redirect to="/bookings" />
                            </Route>
                        </Switch>
                    </Container>
                </Router>
            </ApolloProvider>
        </div>
    );
};

export default App;
