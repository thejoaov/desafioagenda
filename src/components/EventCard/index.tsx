import React from 'react';
import { AntDesign as Icon } from '@expo/vector-icons';
import { useTheme } from 'styled-components';
import { format } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

import {
  Container,
  Image,
  CardBody,
  Events,
  Title,
  TimeView,
  Time,
  EventDate,
  ImageView,
} from './styles';

import { Event } from '../../pages/Dashboard';
import getCapitalizedText from '../../utils/getCapitalizedText';
import defaultTheme from '../../styles/theme/default';

type Props = Event;

const EventCard: React.FC<Props> = ({ title, startAt, image }) => {
  const theme = defaultTheme;

  return (
    <Container>
      {image && (
        <ImageView>
          <Image source={{ uri: image }} />
        </ImageView>
      )}
      <CardBody>
        <Events>Eventos</Events>
        <Title numberOfLines={1}>{title}</Title>
        <TimeView>
          <Icon name="clockcircleo" size={14} color={theme.colors.gray} />
          <Time>
            {format(new Date(startAt).setUTCHours(-3), 'p a', {
              locale: ptBR,
            })}
          </Time>
        </TimeView>
        <EventDate>
          {getCapitalizedText(
            format(
              new Date(startAt).setUTCHours(-3),
              "EEEE, d 'de' MMMM 'às' p'h'",
              {
                locale: ptBR,
              },
            ),
          )}
        </EventDate>
      </CardBody>
    </Container>
  );
};

export default EventCard;
