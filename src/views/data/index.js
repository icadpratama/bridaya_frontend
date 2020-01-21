import React, { Component, Suspense } from 'react';
import { Route, withRouter, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import AppLayout from '../../layout/AppLayout';

const Asset = React.lazy(() =>
    import('./assets')
);
const Equity = React.lazy(() =>
    import('./equities')
);
const Liability = React.lazy(() =>
    import('./liabilities')
);

class Data extends Component {
    render() {
        const { match } = this.props;

        return (
            <AppLayout>
                <div className="dashboard-wrapper">
                    <Suspense fallback={<div className="loading" />}>
                        <Switch>
                            <Redirect exact from={`${match.url}/`} to={`${match.url}/asset`} />
                            <Route
                                path={`${match.url}/asset`}
                                render={props => <Asset {...props} />}
                            />
                            <Route
                                path={`${match.url}/liability`}
                                render={props => <Liability {...props} />}
                            />
                            <Route
                                path={`${match.url}/equity`}
                                render={props => <Equity {...props} />}
                            />
                            <Redirect to="/error" />
                        </Switch>
                    </Suspense>
                </div>
            </AppLayout>
        );
    }
}
const mapStateToProps = ({ menu }) => {
    const { containerClassnames } = menu;
    return { containerClassnames };
};

export default withRouter(
    connect(
        mapStateToProps,
        {}
    )(Data)
);
