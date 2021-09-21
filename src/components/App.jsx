import { Switch, Route, NavLink } from 'react-router-dom';
import { TestPage } from 'pages/TestPage';
import { HomePage } from 'pages/HomePage';

import { PageContainer } from 'components/PageContainer/PageContainer';
import styled from '@emotion/styled';

const StyledNavLink = styled(NavLink)`
  color: #fff;
  margin: 0 10px;
`;

const routes = {
  testPage: '/test-page',
};

export const App = () => {
  return (
    <PageContainer>
      <nav>
        <StyledNavLink to="/">home page</StyledNavLink>
        <StyledNavLink
          to={{
            pathname: routes.testPage,
            state: { from: '/?sortBy=asc' },
          }}
        >
          test page
        </StyledNavLink>
      </nav>

      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path={routes.testPage}>
          <TestPage />
        </Route>
      </Switch>
    </PageContainer>
  );
};
