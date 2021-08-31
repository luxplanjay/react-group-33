import styled from '@emotion/styled';
import ReachTooltip from '@reach/tooltip';
import '@reach/tooltip/styles.css';

export const Tooltip = styled(ReachTooltip)`
  padding: 8px;
  border-radius: 4px;
  color: ${props => props.theme.colors.white};
  background-color: ${props => props.theme.colors.black};
`;
