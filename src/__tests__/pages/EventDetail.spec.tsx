import React from 'react';
import { render } from 'react-native-testing-library';

import EventDetail from '../../pages/EventDetail';

jest.mock('@react-navigation/native', () => {
  const date = new Date().toISOString();
  return {
    useRoute: () => ({
      params: {
        description: 'description',
        id: 1,
        image: 'https://i.imgur.com/QRQZhy4.png',
        location: 'Teresina-PI',
        sendAt: date,
        title: 'Visit on Scranton Branch',
        startAt: date,
      },
    }),
  };
});

jest.mock('date-fns', () => {
  return {
    format: jest.fn(),
  };
});

describe('EventDetail page', () => {
  it('Should render', () => {
    const { getByTestId, getByText } = render(<EventDetail />);

    expect(getByTestId('@pages:eventdetail/container')).toBeTruthy();
    expect(getByTestId('@pages:eventdetail/image')).toBeTruthy();

    expect(getByText('Visit on Scranton Branch')).toBeTruthy();
    expect(getByText('description')).toBeTruthy();
  });
});
