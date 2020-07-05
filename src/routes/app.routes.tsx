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
} from '@react-navigation/stack';
import { MaterialCommunityIcons as Icon } from '@expo/vector-icons';
import { DrawerActions } from '@react-navigation/native';

import defaultTheme from '../styles/theme/default';

import Dashboard from '../pages/Dashboard';
import CustomDrawer from '../components/CustomDrawer';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const BackButton: React.FC<StackHeaderLeftButtonProps> = props => (
  <TouchableOpacity {...props}>
    <Icon name="menu" size={24} color={defaultTheme.colors.black} />
  </TouchableOpacity>
);

const DashboardRoutes: React.FC = () => (
  <Stack.Navigator
    screenOptions={({ navigation }) => ({
      headerTitleAlign: 'left',
      headerLeft: () => (
        <BackButton
          onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
        />
      ),
    })}
  >
    <Stack.Screen name="Dashboard" component={Dashboard} />
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
