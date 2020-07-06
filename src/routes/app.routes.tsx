/* eslint-disable react/jsx-curly-newline */
/* eslint-disable react/display-name */
import React from 'react';
import { TouchableOpacity } from 'react-native';
import {
  createDrawerNavigator,
  DrawerContentComponentProps,
} from '@react-navigation/drawer';
import {
  createStackNavigator,
  StackHeaderLeftButtonProps,
  StackNavigationOptions,
} from '@react-navigation/stack';
import { DrawerActions } from '@react-navigation/native';
import { MaterialCommunityIcons as Icon } from '@expo/vector-icons';

import defaultTheme from '../styles/theme/default';

import Dashboard from '../pages/Dashboard';
import EventDetail from '../pages/EventDetail';
import CustomDrawer from '../components/CustomDrawer';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const BackButton: React.FC<StackHeaderLeftButtonProps> = ({
  canGoBack,
  ...props
}) => (
  <TouchableOpacity {...props} style={{ marginLeft: 20 }}>
    <Icon
      name={canGoBack ? 'arrow-left' : 'menu'}
      size={24}
      color={defaultTheme.colors.black}
    />
  </TouchableOpacity>
);

const DashboardRoutes: React.FC = () => (
  <Stack.Navigator
    initialRouteName="Dashboard"
    screenOptions={({ navigation }): StackNavigationOptions => ({
      headerTitleAlign: 'left',
      headerLeft: ({ canGoBack }: StackHeaderLeftButtonProps) => (
        <BackButton
          canGoBack={canGoBack}
          onPress={() =>
            canGoBack
              ? navigation.goBack()
              : navigation.dispatch(DrawerActions.toggleDrawer())
          }
        />
      ),
    })}
  >
    <Stack.Screen
      name="Dashboard"
      component={Dashboard}
      options={{ title: 'Eventos' }}
    />
    <Stack.Screen
      name="EventDetail"
      component={EventDetail}
      options={{ title: 'Detalhes do evento' }}
    />
  </Stack.Navigator>
);

const AppRoutes: React.FC = () => (
  <Drawer.Navigator
    drawerType="slide"
    drawerContent={(props: DrawerContentComponentProps) => (
      <CustomDrawer {...props} />
    )}
  >
    <Drawer.Screen component={DashboardRoutes} name="Dashboard" />
  </Drawer.Navigator>
);

export default AppRoutes;
