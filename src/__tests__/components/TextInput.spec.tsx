import React from 'react';
import { render } from 'react-native-testing-library';

import Input from '../../components/Input';

jest.mock('@react-navigation/native', () => {
  return {
    useNavigation: jest.fn(),
  };
});

jest.mock('@unform/core', () => {
  return {
    useField: () => ({
      registerField: jest.fn(),
      defaultValue: '',
      fieldName: '',
      error: false,
    }),
  };
});

describe('Input component', () => {
  it('Should render', () => {
    const { getByTestId } = render(<Input name="test" icon="eye" />);

    expect(getByTestId('@components:input')).toBeTruthy();
  });

  it('Should render input title', () => {
    const { getByTestId } = render(
      <Input name="test" title="Title" icon="eye" />,
    );

    expect(getByTestId('@components:input/title')).toBeTruthy();
  });

  it('Should render icon', () => {
    const { getByTestId } = render(
      <Input name="test" title="Title" icon="eye" />,
    );

    expect(getByTestId('@components:input/icon')).toBeTruthy();
  });
});
