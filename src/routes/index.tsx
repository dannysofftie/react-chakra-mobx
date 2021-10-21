import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LandingPage from '../pages';
import SignInPage from '../pages/sign-in';
import SignUpPage from '../pages/sign-up';

const ApplicationRouter = () => {
  return (
    <Router basename="/">
      <Switch>
        <Route exact path="/">
          <LandingPage />
        </Route>
        <Route exact path="/sign-in">
          <SignInPage />
        </Route>
        <Route exact path="/sign-up">
          <SignUpPage />
        </Route>
      </Switch>
    </Router>
  );
};

export default ApplicationRouter;
