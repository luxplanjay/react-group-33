import { Switch, Route, NavLink } from 'react-router-dom';
import { HomePage } from 'pages/HomePage';

import { PageContainer } from 'components/PageContainer/PageContainer';
import styled from '@emotion/styled';

const StyledNavLink = styled(NavLink)`
  color: #fff;
  margin: 0 10px;
`;

export const App = () => {
  return (
    <PageContainer>
      <nav>
        <StyledNavLink to="/">home page</StyledNavLink>
      </nav>

      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
      </Switch>
    </PageContainer>
  );
};
