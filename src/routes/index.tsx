import { chakra, Flex } from '@chakra-ui/react';
import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const LandingPage = lazy(() => import('../pages'));
const SignInPage = lazy(() => import('../pages/sign-in'));
const SignUpPage = lazy(() => import('../pages/sign-up'));

const ApplicationRouter = () => {
  return (
    <Router basename="/">
      <Suspense
        fallback={
          <Flex justifyContent="center">
            <chakra.img src={`/images/page-loading.gif`} />
          </Flex>
        }
      >
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
      </Suspense>
    </Router>
  );
};

export default ApplicationRouter;
