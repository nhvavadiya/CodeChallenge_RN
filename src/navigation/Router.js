import React, {useContext} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import * as Colors from '../assets/Colors';
import HomeScreen from '../screens/Home/HomeScreen';
import {Context} from '../../global/ContextProvider';
import SignUpScreen from '../screens/LoginSignup/SignUpScreen';
import LoginScreen from '../screens/LoginSignup/LoginScreen';
import SplashScreen from '../screens/SplashScreen/SplashScreen';
import ShowItemScreen from '../screens/ShowItem/ShowItemScreen';
import ProfileScreen from '../screens/Profile/ProfileScreen';
import TabComponent from '../common/components/TabComponent';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default Router = () => {
  const {isUserLoggedIn, splashComplete} = useContext(Context);

  if (splashComplete) {
    // to show splash only one time when app is initiated
    if (isUserLoggedIn) {
      // user is already logged in
      return (
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
            contentStyle: {backgroundColor: Colors.White},
          }}>
          <Stack.Screen name="TabNav" component={TabNav} />
          <Stack.Screen name="ShowItem" component={ShowItemScreen} />
        </Stack.Navigator>
      );
    } else {
      // if user is logged out or a new user
      return (
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
            contentStyle: {backgroundColor: Colors.White},
          }}>
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="SignUp" component={SignUpScreen} />
        </Stack.Navigator>
      );
    }
  } else {
    // showing splash on starting of app
    return (
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          contentStyle: {backgroundColor: Colors.White},
        }}>
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
      </Stack.Navigator>
    );
  }
};

const TabNav = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarButton: props => <TabComponent label={'Show'} {...props} />,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarButton: props => <TabComponent label={'Profile'} {...props} />,
        }}
      />
    </Tab.Navigator>
  );
};
