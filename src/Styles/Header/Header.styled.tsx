import styled, {css} from 'styled-components';

export const StyledHeader = styled.header`
  ${({theme}) => css`
    background-color:${theme.colors.blue};
    padding: 2.8rem 8.8rem;
  `}

`

