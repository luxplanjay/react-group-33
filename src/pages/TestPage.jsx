import { Link, Route, useRouteMatch, useLocation, useHistory } from 'react-router-dom';

const InnerComponent = () => {
  const history = useHistory();
  const location = useLocation();
  console.log('InnerComponent: ', location);

  const handleGoBack = () => {
    history.push(location.state?.from ? location.state.from : '/');
  };

  return (
    <div>
      <h2>InnerComponent</h2>
      <button onClick={handleGoBack}>Go back</button>
    </div>
  );
};

export const TestPage = () => {
  const match = useRouteMatch();
  const location = useLocation();

  return (
    <div>
      <h1>TestPage</h1>
      <Link to={{ ...location, pathname: `${match.path}/hello` }}>Hello</Link>
      <Route path={`${match.path}/hello`}>
        <InnerComponent />
      </Route>
    </div>
  );
};
