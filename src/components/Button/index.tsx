import React from 'react';
import { RectButtonProperties } from 'react-native-gesture-handler';

import { Container, ButtonText } from './styles';

interface ButtonProps extends RectButtonProperties {
  children: string | React.ReactElement;
}

const Button: React.FC<ButtonProps> = ({
  children,
  testID = '@components:button',
  ...rest
}) => {
  return (
    <Container testID={testID} {...rest}>
      <ButtonText>{children}</ButtonText>
    </Container>
  );
};

export default Button;
