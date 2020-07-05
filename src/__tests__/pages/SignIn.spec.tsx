import React from 'react';
import 'jest-styled-components';
import { render, cleanup } from 'react-native-testing-library';
import { ThemeProvider, DefaultTheme } from 'styled-components';

import SignIn from '../../pages/SignIn';

jest.mock('@react-navigation/native', () => {
  return {
    useNavigation: jest.fn(),
  };
});

const mockTheme: DefaultTheme = {
  title: 'default',
  colors: {
    background: '#fff',
    white: '#fff',
    purple: '#733DBE',
    purpleDark: '#733dbe1a',
    grayHard: '#333333',
    lightGray: '#999',
    gray: '#666666',
    inputs: '#ABB1B7',
    inputIcon: '#AAAAAA',
    shape: '#3E3B47',
    blackMedium: '#28262E',
    black: '#000',
    error: '#c53030',
  },
};

const WrapperThemeProvider: React.FC = ({ children }) => (
  <ThemeProvider theme={mockTheme}>{children}</ThemeProvider>
);

afterEach(cleanup);

describe('SignIn page', () => {
  it('should contains email/password field', () => {
    const { getByTestId } = render(
      <WrapperThemeProvider>
        <SignIn />
      </WrapperThemeProvider>,
    );

    expect(getByTestId('@pages:signin/email')).toBeTruthy();
    expect(getByTestId('@pages:signin/password')).toBeTruthy();
  });
});
