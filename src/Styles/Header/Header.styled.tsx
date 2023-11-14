import styled, {css} from 'styled-components';

interface HeaderProps {
  $small: boolean | null;
}


export const StyledHeader = styled.header<HeaderProps>`
  ${({theme, $small}) => css`
    background-color:${theme.colors.blue};
    padding: 2.8rem 8.8rem;

    ${$small && css`
    padding: 2.8rem;
    margin: 0rem;
    `}
  `}

`

