/* eslint-disable no-param-reassign */
import React, {
  useCallback,
  useLayoutEffect,
  useEffect,
  useState,
} from 'react';
import { SectionList, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';
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

interface ApiResponseMetadata {
  page: string | number;
  limit: string | number;
  pre_page?: string | number;
  next_page?: string | number;
  total?: string | number;
  total_pages?: string | number;
}
interface ApiResponse {
  data: Event[];
  metadata: ApiResponseMetadata;
}

interface EventsSections {
  title: string;
  data: Event[];
}

const Dashboard: React.FC = () => {
  const [events, setEvents] = useState<EventsSections[]>([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [apiMetadata, setApiMetadata] = useState<ApiResponseMetadata | null>(
    null,
  );

  const { user } = useAuth();
  const navigation = useNavigation();
  const theme = defaultTheme;

  useLayoutEffect(() => {
    const options: StackHeaderOptions = {
      headerTitle: 'Eventos',
    };
    navigation.setOptions(options);
  }, [navigation]);

  const loadData = useCallback(
    async (currentPage = page) => {
      setLoading(true);
      api.get(`/events?limit=10&page=${currentPage}`).then(({ data }) => {
        const { data: responseData, metadata }: ApiResponse = data;
        setApiMetadata(metadata);

        responseData.sort((a, b) => {
          return (((new Date(b.startAt) as Date) <
            new Date(a.startAt)) as unknown) as number;
        });

        const group = responseData.reduce((groups: any, event) => {
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

        setEvents(prevState => [...prevState, ...eventSectionList]);
      });
      setLoading(false);
    },
    [page],
  );

  const handleLoadMore = useCallback(async () => {
    if (page === 1) {
      setPage(page + 1);
    } else if (apiMetadata?.total_pages !== page && page !== 1) {
      setPage(page + 1);
      await loadData(page);
    }
  }, [apiMetadata?.total_pages, loadData, page]);

  const handleReload = useCallback(() => {
    setEvents([]);
    loadData(1);
  }, [loadData]);

  const handleNavigateDetail = useCallback(
    event => {
      navigation.navigate('EventDetail', { ...event });
    },
    [navigation],
  );

  useEffect(() => {
    loadData();
  }, [loadData]);

  return (
    <SectionList
      style={{
        backgroundColor: theme.colors.background,
        paddingHorizontal: 24,
      }}
      refreshing={loading}
      onRefresh={handleReload}
      sections={events}
      onEndReachedThreshold={0.1}
      onEndReached={handleLoadMore}
      ListFooterComponent={() => (
        <ActivityIndicator size={24} color={theme.colors.purple} />
      )}
      keyExtractor={(item, index) => String(item.id + index)}
      renderItem={({ item }) => (
        <EventCard {...item} onPress={() => handleNavigateDetail(item)} />
      )}
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
