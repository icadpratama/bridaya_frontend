import React, { Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

const DashboardCapital = React.lazy(() =>
    import(/* webpackChunkName: "dashboard-capital" */ './capital')
);
const DashboardConsultation = React.lazy(() =>
    import(/* webpackChunkName: "dashboard-consultation" */ './consultation')
);
const DashboardInformation = React.lazy(() =>
    import(/* webpackChunkName: "dashboard-information" */ './information')
);
const DashboardData = React.lazy(() =>
    import(/* webpackChunkName: "dashboard-data" */ './data')
);

const Dashboards = ({ match }) => (
    <Suspense fallback={<div className="loading" />}>
        <Switch>
            <Redirect exact from={`${match.url}/`} to={`${match.url}/default`} />
            <Route
                path={`${match.url}/default`}
                render={props => <DashboardCapital {...props} />}
            />
            <Route
                path={`${match.url}/content`}
                render={props => <DashboardConsultation {...props} />}
            />
            <Route
                path={`${match.url}/ecommerce`}
                render={props => <DashboardData {...props} />}
            />
            <Route
                path={`${match.url}/analytics`}
                render={props => <DashboardInformation {...props} />}
            />
            <Redirect to="/error" />
        </Switch>
    </Suspense>
);
export default Dashboards;
