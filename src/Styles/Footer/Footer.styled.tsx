import styled, {css} from "styled-components";

export const StyledFooter = styled.footer`
  ${({theme}) => css`
  position: absolute;
  width: 100%;
  padding: 1rem;
  display: flex;
  justify-content: center;
  bottom: 0;
  z-index: -999;
  background: ${theme.colors.beige};
  `}
`