import { theme, basePixel, remFn } from '.';

describe('app reducer', () => {
  test('theme.colors', () => {
    expect(theme.colors).toEqual({
      BLACK_0C: '#0c0c0c',
      BLACK_27: '#102027',
      GREY_EF: '#eaedef',
      PRIMARY: '#05a8aa',
      RED: '#f13d3d',
      SECONDARY: '#0a777e',
      TRANSPARENT: 'transparent',
      WHITE: '#ffffff',
    });
  });
  test('theme.rem', () => {
    expect(typeof theme.rem).toEqual('function');
    expect(theme.rem(16)).toBe('1rem');
    expect(theme.rem([15, 25])).toBe('0.9375rem 1.5625rem');
  });
  test('basePixel', () => {
    expect(basePixel).toEqual(16);
  });
  test('remFn', () => {
    expect(remFn(16)).toBe('1rem');
  });
});
