import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import styled from 'styled-components/native';
import { MaterialCommunityIcons as Icon } from '@expo/vector-icons';

// export const Background = styled.View`
//   flex: 1;
//   justify-content: center;
//   background-color: ${({ theme }) => theme.colors.white};
// `;

export const CustomDrawerContent = styled(DrawerContentScrollView).attrs({
  contentContainerStyle: {
    justifyContent: 'center',
  },
})``;

export const ContainerProfile = styled.TouchableOpacity`
  flex: 1;
  /* height: 200px; */

  justify-content: center;
  align-items: center;
  /* margin: 20px 10px 30px 30px; */
  padding: 10px 0;
  margin-bottom: 20px;
`;

export const ProfilePhotoIcon = styled(Icon)``;

export const ProfilePhoto = styled.Image`
  height: 100%;
  width: 100%;
  border-radius: 200px;
`;

export const ProfilePhotoView = styled.View`
  background-color: ${({ theme }) => theme.colors.gray};
  align-items: center;
  justify-content: center;
  text-align: center;
  flex: 1;
  width: 100px;
  height: 100px;
  border-radius: 50px;
  margin: 20px 0;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.25);

  elevation: 10;
  align-self: center;
`;

export const ProfileName = styled.Text`
  color: ${({ theme }) => theme.colors.purple};
  text-transform: capitalize;

  font-size: 16px;
`;

export const CustomDrawerItem = styled<typeof DrawerItem>(DrawerItem).attrs({
  labelStyle: {
    fontSize: 16,
    marginLeft: -10,
    height: 22,
  },
  itemStyle: {
    width: '80%',
    alignSelf: 'center',
  },
})``;

export const HorizontalRule = styled.View`
  border-bottom-width: 1px;
  border-bottom-color: rgba(255, 255, 255, 0.2);
  width: 80%;

  align-self: center;
`;

export const LogoutDrawerItem = styled<typeof DrawerItem>(DrawerItem).attrs(
  ({ theme }) => ({
    labelStyle: {
      fontSize: 16,
      marginLeft: -10,
      paddingTop: 5,
      color: theme.colors.purple,
    },
  }),
)``;
