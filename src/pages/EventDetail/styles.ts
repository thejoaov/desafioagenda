import styled from 'styled-components/native';
import { transparentize } from 'polished';

import defaultTheme from '../../styles/theme/default';

const theme = defaultTheme;

export const Container = styled.View`
  flex: 1;
`;

export const Image = styled.ImageBackground`
  height: 32%;
`;

export const Body = styled.ScrollView`
  flex: 1;

  background-color: ${theme.colors.background};
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;

  margin-top: -20px;
  padding: 32px;
`;

export const EventHeader = styled.View`
  flex-direction: row;
`;

export const EventDateView = styled.View`
  border-radius: 5px;
  height: 60px;
  width: 60px;
  align-items: center;
  justify-content: center;
  margin-right: 16px;
  background-color: ${transparentize(0.9, theme.colors.purple)};
`;

export const EventDate = styled.Text`
  font-size: 22px;
  color: ${theme.colors.purple};
  font-weight: bold;
`;

export const EventMonth = styled.Text`
  font-size: 16px;
  color: ${theme.colors.purple};
  text-transform: uppercase;
`;

export const TitleView = styled.View`
  flex: 1;
  margin-top: -5px;
`;

export const Title = styled.Text`
  font-size: 22px;
  font-weight: bold;
  color: ${theme.colors.grayHard};
`;

export const TimeView = styled.View`
  flex-direction: row;
  margin: auto 0;
  align-items: center;
`;

export const Time = styled.Text`
  font-size: 14px;
  color: ${theme.colors.gray};
  line-height: 16px;
  align-self: center;
  margin-left: 6px;
`;

export const Description = styled.Text`
  margin-top: 32px;
  font-size: 16px;
  line-height: 28px;
  color: ${theme.colors.gray};
`;
