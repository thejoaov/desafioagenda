import styled from 'styled-components/native';
import defaultTheme from '../../styles/theme/default';

export const Container = styled.TouchableOpacity`
  flex-direction: row;
  background-color: ${defaultTheme.colors.background};
  padding: 10px;
  margin: 0 6px;
  margin-bottom: 24px;
  box-shadow: 1px 1px 10px ${defaultTheme.colors.purpleDark};
  elevation: 3;
  border-radius: 5px;
  border-left-width: 5px;
  border-left-color: ${defaultTheme.colors.purple};
`;

export const ImageView = styled.View`
  height: 92px;
  width: 66px;
  border-radius: 3px;
  margin-right: 12px;
  background-color: ${defaultTheme.colors.lightGray};
`;

export const Image = styled.Image`
  flex: 1;
  border-radius: 3px;
`;

export const CardBody = styled.View`
  height: 92px;
`;

export const Events = styled.Text`
  font-size: 12px;
  text-transform: uppercase;
  color: ${defaultTheme.colors.lightGray};
  font-weight: 600;
  letter-spacing: 0.72px;
  margin-bottom: 11.97px;
`;

export const Title = styled.Text`
  font-size: 16px;
  color: ${defaultTheme.colors.grayHard};
  font-weight: 600;
`;

export const TimeView = styled.View`
  flex-direction: row;
  margin: auto 0;
  align-items: center;
`;

export const Time = styled.Text`
  font-size: 14px;
  color: ${defaultTheme.colors.gray};
  line-height: 16px;
  align-self: center;
  margin-left: 6px;
`;

export const EventDate = styled.Text`
  font-size: 12px;
  font-weight: 600;
  color: ${defaultTheme.colors.lightGray};
`;
