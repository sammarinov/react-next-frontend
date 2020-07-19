import { DefaultTheme } from 'styled-components';
import colors from '@Config/colors.json';

export const basePixel = 16;
export const remFn = (pixel: number): string => `${pixel / basePixel}rem`;

const theme: DefaultTheme = {
  colors,
  rem: (pixels: number | number[]) => {
    if (typeof pixels === 'number') {
      return remFn(pixels);
    }
    return pixels.map(pixel => remFn(pixel)).join(' ');
  },
};

export { theme };
