import React from 'react';
import { AntDesign as Icon } from '@expo/vector-icons';
import { format } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

import { TouchableOpacityProps } from 'react-native';
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

const EventCard: React.FC<Props & TouchableOpacityProps> = ({
  title,
  startAt,
  image,
  testID = '@components:eventcard/container',
  ...rest
}) => {
  const theme = defaultTheme;

  return (
    <Container testID={testID} {...rest}>
      {image && (
        <ImageView>
          <Image source={{ uri: image }} testID="@components:eventcard/image" />
        </ImageView>
      )}
      <CardBody>
        <Events>Eventos</Events>
        <Title testID="@components:eventcard/title" numberOfLines={1}>
          {title}
        </Title>
        <TimeView>
          <Icon name="clockcircleo" size={14} color={theme.colors.gray} />
          <Time testID="@components:eventcard/eventtime">
            {format(new Date(startAt).setUTCHours(-3), 'p')}
          </Time>
        </TimeView>
        <EventDate testID="@components:eventcard/eventdate">
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
