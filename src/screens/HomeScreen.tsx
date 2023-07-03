import {useNavigation} from '@react-navigation/native';
import React, {FC} from 'react';

import {StyleSheet, Text, View, Image} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {AuthenticationNavigationProp} from '../navigations/AuthenticationNavigator/types';
import {AppState} from '../core/rootReducer';
import Button from '../components/Button/Button';
import { getLogout } from '../core/authentication/authenticationActionCreators';

type HomeScreenProps = {};

/**
 * Component description
 * Card component was using by FlatList inside of Categoriest List
 * @param props - {@link HomeScreenProps}
 */

const HomeScreen: FC<HomeScreenProps> = ({}) => {
  const dispatch = useDispatch();
  const navigation = useNavigation<AuthenticationNavigationProp>();
  const {authentication, isLoading, error} = useSelector(
    state => state,
  );
  const user = authentication.data;

  const handleLogout = () => {
    //run logout user action
    dispatch(getLogout());
    navigation.navigate('Login');
  };


  return (
    <View
      testID="home-screen"
      style={{
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'flex-start',
        alignItems: 'center',
        padding: 20,
      }}>
      <Text
        style={{
          fontSize: 20,
          fontWeight: 'bold',
          color: '#333',
        }}>
        Profile
      </Text>
      <Image
        style={{
          width: 200,
          height: 200,
          borderRadius: 100,
          marginTop: 20,
          marginBottom: 20,
          borderWidth: 2,
          borderColor: '#333',
        }}
        source={{
          uri: user?.image,
        }}
      />

      <Text
        style={{
          fontSize: 16,
          fontWeight: 'bold',
          color: '#333',
        }}>
        Name: {user?.firstName} {user.lastName}
      </Text>
      <Text
        style={{
          fontSize: 16,
          fontWeight: 'normal',
          color: '#333',
        }}>
        Gender: {user?.gender}
      </Text>
      <Text
        style={{
          fontSize: 16,
          fontWeight: 'normal',
          color: '#333',
          marginBottom: 20,
        }}>
        Email: {user?.email}
      </Text>

      <View
        style={{
          width: '100%',
        }}>
        <Button
          handlePress={handleLogout}
          title="Logout"
          key={'test'}
          testID="logout-button"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 50,
  },
});

export default HomeScreen;
