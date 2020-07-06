import React from 'react';
import { render } from 'react-native-testing-library';

import EventCard from '../../components/EventCard';

jest.mock('date-fns', () => {
  return {
    format: jest.fn(),
  };
});

jest.mock('date-fns/locale/pt-BR', () => jest.fn());

jest.mock('../../utils/getCapitalizedText', () => jest.fn());

const mockEvent = {
  description: 'description',
  id: 1,
  image: 'https://i.imgur.com/QRQZhy4.png',
  location: 'Teresina-PI',
  sendAt: new Date().toISOString(),
  title: 'Visit on Scranton Branch',
  startAt: new Date().toISOString(),
};

describe('EventCard component', () => {
  it('Should render', () => {
    const { getByTestId } = render(<EventCard {...mockEvent} />);

    expect(getByTestId('@components:eventcard/container')).toBeTruthy();
  });

  it('Should render with custom props', () => {
    const { getByTestId, getByText } = render(<EventCard {...mockEvent} />);

    expect(getByTestId('@components:eventcard/container')).toBeTruthy();
    expect(getByTestId('@components:eventcard/image')).toBeTruthy();

    expect(getByText(mockEvent.title)).toBeTruthy();
  });
});
