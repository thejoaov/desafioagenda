/* eslint-disable no-param-reassign */
import React, {
  useCallback,
  useLayoutEffect,
  useEffect,
  useState,
} from 'react';
import { SectionList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useTheme } from 'styled-components';
import { StackHeaderOptions } from '@react-navigation/stack/lib/typescript/src/types';
import { format } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

import { useAuth } from '../../hooks/auth';
import api from '../../services/api';

import { SectionTitleView, SectionTitle, SectionDivider } from './styles';
import EventCard from '../../components/EventCard';
import getCapitalizedText from '../../utils/getCapitalizedText';
import defaultTheme from '../../styles/theme/default';

export interface Event {
  id: number;
  title: string;
  description: string;
  sendAt: string;
  image: string;
  startAt: string;
  location: string;
}

interface ApiResponse {
  data: Event[];
  metadata: {
    page: string | number;
    limit: string | number;
    pre_page?: string | number;
    next_page?: string | number;
    total?: string | number;
    total_pages?: string | number;
  };
}

interface EventsSections {
  title: string;
  data: Event[];
}

const Dashboard: React.FC = () => {
  const [events, setEvents] = useState<EventsSections[]>([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);

  const { user } = useAuth();
  const { navigate, setOptions } = useNavigation();
  const theme = defaultTheme;

  useLayoutEffect(() => {
    const options: StackHeaderOptions = {
      headerTitle: 'Eventos',
    };
    setOptions(options);
  }, [setOptions]);

  const loadData = useCallback(async () => {
    setLoading(true);
    api.get(`/events?limit=10&page=${page}`).then(({ data }) => {
      const responseData: ApiResponse = data;

      responseData.data.sort((a, b) => {
        return (((new Date(b.startAt) as Date) <
          new Date(a.startAt)) as unknown) as number;
      });

      const group = responseData.data.reduce((groups: any, event) => {
        const date = event.startAt.split('T')[0];
        if (!groups[date]) {
          groups[date] = [];
        }
        groups[date].push(event);
        return groups;
      }, {});

      const eventSectionList: EventsSections[] = Object.keys(group).map(
        date => {
          return {
            title: date,
            data: group[date],
          };
        },
      );

      setEvents(eventSectionList);
    });
    setLoading(false);
  }, [page]);

  useEffect(() => {
    loadData();
  }, [loadData]);

  return (
    <SectionList
      style={{
        backgroundColor: theme.colors.background,
        paddingHorizontal: 24,
      }}
      sections={events}
      keyExtractor={(item, index) => String(item.id + index)}
      renderItem={({ item }) => <EventCard {...item} />}
      renderSectionHeader={({ section: { title } }) => (
        <SectionTitleView>
          <SectionTitle>
            {getCapitalizedText(
              format(new Date(title), "EEEE, d 'de' MMMM", {
                locale: ptBR,
              }),
            )}
          </SectionTitle>
          <SectionDivider />
        </SectionTitleView>
      )}
    />
  );
};

export default Dashboard;
