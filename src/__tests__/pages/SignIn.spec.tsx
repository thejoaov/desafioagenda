import React from 'react';
import { render } from 'react-native-testing-library';

import SignIn from '../../pages/SignIn';

jest.mock('@react-navigation/native', () => {
  return {
    useNavigation: jest.fn(),
  };
});

describe('SignIn page', () => {
  it('Should contains email/password field', () => {
    const { getByTestId } = render(<SignIn />);

    expect(getByTestId('@pages:signin/email')).toBeTruthy();
    expect(getByTestId('@pages:signin/password')).toBeTruthy();
  });
});
