import styled from '@emotion/styled';
import { iconSize } from '../../constants';

export const StyledButton = styled.button`
  display: inline-flex;
  align-items: center;
  margin: 0;
  padding: 8px 12px;
  border: none;
  border-radius: 2px;
  color: ${props => props.theme.colors.secondary};
  background-color: ${props => props.theme.colors.primary};
  text-transform: uppercase;
  cursor: pointer;

  :hover {
    background-color: ${props => props.theme.colors.secondary};
  }

  > svg {
    margin-right: 8px;
  }
`;

export const Button = ({ icon: Icon, children }) => {
  return (
    <StyledButton>
      {Icon && <Icon size={iconSize.sm} />}
      {children}
    </StyledButton>
  );
};
