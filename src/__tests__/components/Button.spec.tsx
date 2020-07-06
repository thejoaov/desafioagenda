import React from 'react';
import { render } from 'react-native-testing-library';

import Button from '../../components/Button';

jest.mock('@react-navigation/native', () => {
  return {
    useNavigation: jest.fn(),
  };
});

describe('Button component', () => {
  it('Should render', () => {
    const { getByTestId } = render(<Button>Test</Button>);

    expect(getByTestId('@components:button')).toBeTruthy();
  });

  it('Should render with custom children', () => {
    const { getByText } = render(<Button>Testing Text</Button>);

    expect(getByText('Testing Text')).toBeTruthy();
  });
});
