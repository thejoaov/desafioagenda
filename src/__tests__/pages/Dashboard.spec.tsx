import React from 'react';
import { render } from 'react-native-testing-library';

import Dashboard from '../../pages/Dashboard';

jest.mock('@react-navigation/native', () => {
  return {
    useNavigation: () => ({
      setOptions: jest.fn(),
    }),
  };
});

describe('Dashboard page', () => {
  it('Should render correctly', async () => {
    const { getByTestId } = render(<Dashboard />);

    expect(getByTestId('@pages:dashboard/container')).toBeTruthy();
  });
});
