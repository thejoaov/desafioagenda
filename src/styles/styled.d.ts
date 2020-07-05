import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;

    colors: {
      background: string;
      white: string;
      purple: string;
      grayHard: string;
      gray: string;
      inputs: string;
      inputIcon: string;
      shape: string;
      blackMedium: string;
      black: string;
      purpleDark: string;
      lightGray: string;
      error: string;
    };
  }
}
