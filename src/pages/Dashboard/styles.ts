import styled from 'styled-components/native';

export const SectionTitleView = styled.View`
  width: 100%;
  flex-direction: row;
  border-bottom-width: 0.5px;
  border-bottom-color: ${({ theme }) => theme.colors.purpleDark};
  margin-bottom: 28px;
`;

export const SectionTitle = styled.Text`
  font-size: 14px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.lightGray};
  background-color: ${({ theme }) => theme.colors.white};
  line-height: 16px;
  margin-bottom: -4px;
  padding-right: 16px;
  padding-top: 3px;
`;

export const SectionDivider = styled.View``;
