import styled, { css } from 'styled-components';

interface StyledHeadingsProps {
  $size: 'h1' | 'h2' | 'h3';
}

export const StyledHeading = styled.p<StyledHeadingsProps>`
  ${({ theme, $size }) => css`
    ${$size === 'h1' &&
    css`
      font-size: 4rem;
      line-height: 1.9rem;
      font-weight: 600;
      color: ${theme.colors.white};
    `};

    ${$size === 'h2' &&
    css`
      font-size: 1.6rem;
      line-height: 1.9rem;
      font-weight: 400;
      color: ${theme.colors.black.light_black_1};
    `}

    ${$size === 'h3' &&
    css`
      font-size: 1.5rem;
      line-height: 1.5rem;
      font-weight: 700;
      color: ${theme.colors.white};
    `}
  `}
`;
