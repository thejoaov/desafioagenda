import React from 'react';
import { AntDesign as Icon } from '@expo/vector-icons';
import { useRoute } from '@react-navigation/native';
import { format } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

import {
  Container,
  Image,
  Body,
  EventHeader,
  EventDateView,
  EventDate,
  EventMonth,
  TitleView,
  Title,
  TimeView,
  Time,
  Description,
} from './styles';

import { Event } from '../Dashboard';
import defaultTheme from '../../styles/theme/default';

const EventDetail: React.FC = () => {
  const { params } = useRoute();
  const theme = defaultTheme;
  const { title, description, image, startAt } = params as Event;

  return (
    <Container>
      <Image source={{ uri: image }} />
      <Body>
        <EventHeader>
          <EventDateView>
            <EventDate>
              {format(new Date(startAt).setUTCHours(-3), 'd')}
            </EventDate>
            <EventMonth>
              {format(new Date(startAt).setUTCHours(-3), 'MMM', {
                locale: ptBR,
              })}
            </EventMonth>
          </EventDateView>
          <TitleView>
            <Title numberOfLines={3} ellipsizeMode="tail">
              {title}
            </Title>
            <TimeView>
              <Icon name="clockcircleo" size={14} color={theme.colors.gray} />
              <Time>{format(new Date(startAt).setUTCHours(-3), 'p')}</Time>
            </TimeView>
          </TitleView>
        </EventHeader>
        <Description>{description}</Description>
      </Body>
    </Container>
  );
};

export default EventDetail;
