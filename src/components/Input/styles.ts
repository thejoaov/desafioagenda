import styled, { css } from 'styled-components/native';

import { Feather as FeatherIcon } from '@expo/vector-icons';

interface ContainerProps {
  isFocused: boolean;
  isErrored: boolean;
}

interface IconProps {
  isFocused: boolean;
  isFilled: boolean;
}

export const Container = styled.View<ContainerProps>`
  width: 100%;
  height: 60px;
  padding: 0 16px 0 20px;
  border: 1px ${({ theme }) => theme.colors.inputs};
  border-radius: 3px;
  margin-bottom: 8px;

  flex-direction: row;
  align-items: center;

  ${props =>
    props.isErrored &&
    css`
      border-color: ${props.theme.colors.error};
    `}

  ${props =>
    props.isFocused &&
    css`
      border-color: ${props.theme.colors.purple};
    `}
`;

export const TextInput = styled.TextInput.attrs(({ theme }) => ({
  placeholderTextColor: theme.colors.gray,
}))`
  flex: 1;
  color: ${({ theme }) => theme.colors.grayHard};
  font-size: 20px;
`;

export const InputTitle = styled.Text`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.gray};
  margin-bottom: 8.5px;
  align-self: flex-start;
`;

export const Icon = styled(FeatherIcon)<IconProps>`
  margin-left: 16px;
  color: ${({ theme }) => theme.colors.inputIcon};

  ${props =>
    (props.isFocused || props.isFilled) &&
    css`
      color: ${props.theme.colors.purple};
    `}
`;
