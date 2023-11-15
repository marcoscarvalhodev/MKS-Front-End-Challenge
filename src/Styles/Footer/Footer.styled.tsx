import styled, {css} from "styled-components";

export const StyledFooter = styled.footer`
  ${({theme}) => css`
  
  width: 100%;
  padding: 1rem;
  display: flex;
  justify-content: center;
  
  background: ${theme.colors.beige};
  `}
`