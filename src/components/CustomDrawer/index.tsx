import React, { useCallback, useState } from 'react';
import { Alert, ToastAndroid as Toast, Platform } from 'react-native';
import { DrawerContentComponentProps } from '@react-navigation/drawer';
import { MaterialCommunityIcons as Icon } from '@expo/vector-icons';

import { useAuth } from '../../hooks/auth';

import {
  CustomDrawerContent,
  CustomDrawerItem,
  LogoutDrawerItem,
  HorizontalRule,
  ContainerProfile,
  ProfilePhoto,
  ProfileName,
  ProfilePhotoView,
  ProfilePhotoIcon,
} from './styles';

const CustomDrawer: React.FC<DrawerContentComponentProps> = props => {
  const { user, signOut } = useAuth();
  const { navigation } = props;
  const [counter, setCounter] = useState(0);

  const logout = useCallback(() => {
    Alert.alert(
      'Já vai? 🥺',
      'Deseja deslogar sua conta?',
      [{ text: 'Cancelar' }, { text: 'Sim, sair', onPress: () => signOut() }],
      { cancelable: true },
    );
  }, [signOut]);

  const handleDashboard = useCallback(() => {
    navigation.navigate('Dashboard');
  }, [navigation]);

  const handleEasterEgg = useCallback(() => {
    setCounter(counter + 1);
    if (counter < 2) {
      Platform.OS === 'android' &&
        Toast.show(`Counter: ${counter}`, Toast.SHORT);
    } else {
      Alert.alert('Michael Scott says:', '"That\'s what she said 😀"');
    }
  }, [counter]);

  return (
    <CustomDrawerContent {...props}>
      <ContainerProfile onPress={handleEasterEgg}>
        <ProfilePhotoView>
          {user.avatar_url ? (
            <ProfilePhoto source={{ uri: user.avatar_url }} />
          ) : (
            <ProfilePhotoIcon name="account" size={70} />
          )}
        </ProfilePhotoView>
        <ProfileName>{user?.name}</ProfileName>
      </ContainerProfile>
      <HorizontalRule />

      <CustomDrawerItem
        label="Dashboard"
        onPress={handleDashboard}
        icon={() => <Icon name="home" size={23} />}
      />
      <LogoutDrawerItem
        label="Sair"
        onPress={logout}
        icon={() => <Icon name="import" size={23} />}
      />
    </CustomDrawerContent>
  );
};

export default CustomDrawer;
