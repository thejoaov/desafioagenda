import React, { ReactElement } from 'react';
import {
  createDrawerNavigator,
  DrawerContentComponentProps,
} from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';

import defaultTheme from '../styles/theme/default';

import Dashboard from '../pages/Dashboard';
import CustomDrawer from '../components/CustomDrawer';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const DashboardRoutes: React.FC = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
      cardStyle: { backgroundColor: defaultTheme.colors.background },
    }}
  >
    <Stack.Screen name="Dashboard" component={Dashboard} />
  </Stack.Navigator>
);

const AppRoutes: React.FC = () => (
  <Drawer.Navigator
    drawerContent={(props: DrawerContentComponentProps) => (
      <CustomDrawer {...props} />
    )}
  >
    <Drawer.Screen component={DashboardRoutes} name="Dashboard" />
  </Drawer.Navigator>
);

export default AppRoutes;
