import React from 'react';
import useMedia from './useMedia';
import { themeAttrs } from '../Styles/ThemeAttrs';

const ContainerSizes = () => {
  return {
    xlarge: useMedia(`(min-width: ${themeAttrs.container.container_xl})`),
    large: useMedia(
      `(max-width: ${themeAttrs.container.container_xl}) and (min-width: ${themeAttrs.container.container_l})`
    ),
    medium: useMedia(
      `(max-width: ${themeAttrs.container.container_l}) and (min-width: ${themeAttrs.container.container_m})`
    ),
    small: useMedia(`(max-width: ${themeAttrs.container.container_m})`),
    xsmall: useMedia(`(max-width: ${themeAttrs.container.container_s})`),
  };
};

export default ContainerSizes;
