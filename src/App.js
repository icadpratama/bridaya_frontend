import React, { Component, Suspense } from 'react';
import { connect } from 'react-redux';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import { IntlProvider } from 'react-intl';
import AppLocale from './lang';
import ColorSwitcher from './components/common/ColorSwitcher';
import NotificationContainer from './components/common/react-notifications/NotificationContainer';
import { isMultiColorActive } from './constants/defaultValues';
import { getDirection } from './helpers/Utils';

const ViewMain = React.lazy(() =>
  import(/* webpackChunkName: "views" */ './views')
);
const ViewApp = React.lazy(() =>
  import(/* webpackChunkName: "views-app" */ './views/app')
);

const ViewDashboard = React.lazy(() =>
  import(/* webpackChunkName: "views-app" */ './views/dashboards')
);
const ViewCapital = React.lazy(() =>
  import(/* webpackChunkName: "views-capital" */ './views/capital')
);
const ViewConsultation = React.lazy(() =>
  import(/* webpackChunkName: "views-consultation" */ './views/consultation')
);
const ViewData = React.lazy(() =>
  import(/* webpackChunkName: "views-data" */ './views/data')
);
const ViewInformation = React.lazy(() =>
  import(/* webpackChunkName: "views-information" */ './views/information')
);
const ViewUser = React.lazy(() =>
  import(/* webpackChunkName: "views-user" */ './views/user')
);
const ViewError = React.lazy(() =>
  import(/* webpackChunkName: "views-error" */ './views/error')
);

class App extends Component {
  constructor(props) {
    super(props);
    const direction = getDirection();
    if (direction.isRtl) {
      document.body.classList.add('rtl');
      document.body.classList.remove('ltr');
    } else {
      document.body.classList.add('ltr');
      document.body.classList.remove('rtl');
    }
  }

  render() {
    const { locale } = this.props;
    const currentAppLocale = AppLocale[locale];

    return (
      <div className="h-100">
        <IntlProvider
          locale={currentAppLocale.locale}
          messages={currentAppLocale.messages}
        >
          <React.Fragment>
            <NotificationContainer />
            {isMultiColorActive && <ColorSwitcher />}
            <Suspense fallback={<div className="loading" />}>
              <Router>
                <Switch>
                  <Route
                    path="/app"
                    render={props => <ViewApp {...props} />}
                  />
                  <Route
                    path="/dashboards"
                    render={props => <ViewDashboard {...props} />}
                  />
                  <Route
                    path="/capital"
                    render={props => <ViewCapital {...props} />}
                  />
                  <Route
                    path="/consultation"
                    render={props => <ViewConsultation {...props} />}
                  />
                  <Route
                    path="/data"
                    render={props => <ViewData {...props} />}
                  />
                  <Route
                    path="/information"
                    render={props => <ViewInformation {...props} />}
                  />
                  <Route
                    path="/user"
                    render={props => <ViewUser {...props} />}
                  />
                  <Route
                    path="/error"
                    exact
                    render={props => <ViewError {...props} />}
                  />
                  <Route
                    path="/"
                    exact
                    render={props => <ViewMain {...props} />}
                  />
                  <Redirect to="/error" />
                </Switch>
              </Router>
            </Suspense>
          </React.Fragment>
        </IntlProvider>
      </div>
    );
  }
}

const mapStateToProps = ({ settings }) => {
  const { locale } = settings;
  return { locale };
};
const mapActionsToProps = {};

export default connect(
  mapStateToProps,
  mapActionsToProps
)(App);
