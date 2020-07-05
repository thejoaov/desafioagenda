import styled from 'styled-components/native';
import { Form as UnForm } from '@unform/mobile';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 40px 24px;
`;

export const Form = styled(UnForm)`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  align-self: flex-start;

  margin-bottom: 36px;
`;
