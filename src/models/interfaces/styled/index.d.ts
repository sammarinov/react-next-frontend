import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: any;
    rem: Function;
  }
}
