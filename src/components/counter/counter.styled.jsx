import styled from '@emotion/styled';

export const CounterWrapper = styled.div`
 margin: 250px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #2e2b2b;
  background-color: #07cbee;
`;

export const CounterValue = styled.span`
  font-size: 24px;
  margin-bottom: 16px;
`;
export const CounterControls = styled.div`
  display: flex;
  gap: 8px;
`;
export const CounterButton = styled.button`
  
  color: #2e2b2b;
  border: none;
  border-radius: 4px;
  padding: 8px 16px;
  cursor: pointer;
background-color: #afa5a5;
 
`;