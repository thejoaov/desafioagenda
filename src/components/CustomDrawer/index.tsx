import React, { useCallback } from 'react';

import { DrawerActions } from '@react-navigation/native';
import { Alert } from 'react-native';
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

interface Props {
  navigation: any;
}

const CustomDrawer: React.FC<Props> = props => {
  const { user } = useAuth();
  const { navigation } = props;

  const logout = useCallback(() => {
    Alert.alert(
      'Já vai? 🥺',
      'Deseja deslogar sua conta?',
      [
        { text: 'Cancelar' },
        { text: 'Sim, sair', onPress: () => console.log('Logout') },
      ],
      { cancelable: true },
    );
  }, []);

  const handleDashboard = useCallback(() => {
    navigation.navigate('Dashboard');
  }, [navigation]);

  return (
    <CustomDrawerContent {...props}>
      <ContainerProfile>
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
