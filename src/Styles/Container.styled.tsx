import styled, { css } from 'styled-components';

interface StyledContainerProps {
  $xlarge: boolean | null;
}

export const StyledContainer = styled.div<StyledContainerProps>`
  ${({ theme, $xlarge }) => css`
  position: relative;
  overflow-x: hidden;
  height: 100vh;
  display: flex;
  flex-direction: column;
  
  `}
`;
