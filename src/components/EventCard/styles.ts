import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;
  background-color: ${({ theme }) => theme.colors.background};
  padding: 16px;
  margin-bottom: 24px;
  box-shadow: 1px 1px 10px ${({ theme }) => theme.colors.purpleDark};
  border-radius: 5px;
  border-left-width: 5px;
  border-left-color: ${({ theme }) => theme.colors.purple};
`;

export const ImageView = styled.View`
  height: 92px;
  width: 66px;
  border-radius: 3px;
  margin-right: 12px;
  background-color: ${({ theme }) => theme.colors.lightGray};
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
  color: ${({ theme }) => theme.colors.lightGray};
  font-weight: 600;
  letter-spacing: 0.72px;
  margin-bottom: 11.97px;
`;

export const Title = styled.Text`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.grayHard};
  font-weight: 600;
`;

export const TimeView = styled.View`
  flex-direction: row;
  margin: auto 0;
  align-items: center;
`;

export const Time = styled.Text`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.gray};
  line-height: 16px;
  align-self: center;
  margin-left: 6px;
`;

export const EventDate = styled.Text`
  font-size: 12px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.lightGray};
`;
