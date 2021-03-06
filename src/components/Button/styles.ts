import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import defaultTheme from '../../styles/theme/default';

export const Container = styled(RectButton)`
  width: 100%;
  margin: 0 auto;
  height: 60px;
  background: ${defaultTheme.colors.purple};
  border-radius: 10px;
  margin-top: 8px;

  justify-content: center;
  align-items: center;
`;

export const ButtonText = styled.Text`
  color: ${defaultTheme.colors.background};
  font-size: 18px;
  font-weight: 700;
`;
