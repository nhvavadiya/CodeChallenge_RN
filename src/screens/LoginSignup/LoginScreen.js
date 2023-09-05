import {Image, SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';
import * as Colors from '../../assets/Colors';
import CustomLoginTextInput from '../../common/components/CustomLoginTextInput';
import IconLinks from '../../assets/icons/IconLinks';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {emailRegEx} from '../../assets/Constants';
import {useDispatch, useSelector} from 'react-redux';
import {LoginSignupStyle as styles} from './LoginSignupStyle';
import {CurrentUserAction} from '../../redux/action/CurrentUserAction';
import {Context} from '../../../global/ContextProvider';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CustomFullLoader from '../../common/components/CustomFullLoader';
import {RFValue} from 'react-native-responsive-fontsize';

GoogleSignin.configure({
  iosClientId:
    '277454502150-t5k5ksu60c83ipqr0sefic13lvhlve91.apps.googleusercontent.com',
  androidClientId:
    '277454502150-gpua89cdkmk2riph4aciv0c456t50bd9.apps.googleusercontent.com',
  forceCodeForRefreshToken: true,
});

export default LoginScreen = ({navigation}) => {
  const {setIsUserLoggedIn} = useContext(Context);
  const dispatch = useDispatch();
  const CurrentUser = useSelector(state => state.CurrentUserReducer);

  const [emailV, setEmailV] = useState('');
  const [passwordV, setPasswordV] = useState('');
  const [emailE, setEmailE] = useState('');
  const [passwordE, setPasswordE] = useState('');
  const [disabled, setDisabled] = useState(true);
  const [showLoader, setShowLoader] = useState(false);

  async function btn_googleSignIn() {
    try {
      await GoogleSignin.hasPlayServices();
      await GoogleSignin.signIn().then(async res => {
        const user = {
          name: res.user.name,
          email: res.user.email,
          googleLogin: true,
        };

        let userData = await AsyncStorage.getItem('allUser');
        let data = JSON.parse(userData);

        if (data) {
          // check whether the user email exist or not from asyncStorage
          const uniqueUser =
            data?.filter(item => item?.email === user.email).length === 0;
          if (uniqueUser) {
            // saving the user to asyncstorage
            let obj = [...data, user];
            saveAllUsers(obj);
            dispatch(CurrentUserAction(user));
          } else {
            dispatch(CurrentUserAction(user));
          }
        } else {
          let obj = [user];
          saveAllUsers(obj);
          dispatch(CurrentUserAction(user));
        }
      });
    } catch (error) {
      console.log('Google signin error ----> ', error);
    }
  }

  // saveAllUsers :- adds the user to allUser
  async function saveAllUsers(item) {
    try {
      await AsyncStorage.setItem('allUser', JSON.stringify(item));
    } catch (error) {
      console.log('error while adding user: ', error);
    }
  }

  // saveCurrentUser :- adds to Currrent User
  async function saveCurrentUser(item) {
    try {
      await AsyncStorage.setItem('currentUser', JSON.stringify(item));
    } catch (error) {
      console.log('error while adding current user: ', error);
    }
    setIsUserLoggedIn(true); // changing the router navigation
  }

  async function btn_login() {
    const user = {
      email: emailV,
      password: passwordV,
      googleLogin: false,
    };

    await AsyncStorage.getItem('allUser').then(res => {
      // to get all stored users from Async Storage
      const data = JSON.parse(res);
      const userExist = data?.filter(item => item?.email === user.email);
      if (userExist?.length === 0 || data === null) {
        // user doesn't exists
        setEmailE(`User doesn't exits, please signup`);
      } else {
        // user exists
        if (userExist?.[0]?.googleLogin) {
          // existing user is google user
          setEmailE(`Entered email is a google user, please login with google`);
        } else {
          // existing user is not a google user
          if (passwordV === userExist?.[0]?.password) {
            dispatch(CurrentUserAction(userExist?.[0]));
          } else {
            setPasswordE(`Password doesn't matches`);
          }
        }
      }
    });
  }

  function validation() {
    if (!emailRegEx.test(emailV)) {
      setEmailE('Please enter a valid email');
    } else {
      setEmailE('');
    }

    if (emailRegEx.test(emailV)) {
      btn_login();
    }
  }

  useEffect(() => {
    if (emailV.trim() && passwordV) {
      // if email and password field is empty
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [emailV, passwordV]);

  useEffect(() => {
    if (CurrentUser?.CurrentUserSuccess) {
      if (CurrentUser?.data) {
        // after signup or google btn is pressed
        saveCurrentUser(CurrentUser?.data); // saves the current user to async storage
        setShowLoader(false); // stops the loader
      }
    }
  }, [CurrentUser]);

  return (
    <View style={styles.container}>
      <SafeAreaView />
      <CustomFullLoader showLoader={showLoader} />
      <View style={styles.headerContainer}>
        <Text style={styles.headerTxt}>{'Login'}</Text>
      </View>
      <View style={styles.mainContainer}>
        <View style={styles.emailLoginContainer}>
          <CustomLoginTextInput
            value={emailV}
            icon={IconLinks.mailFill}
            placeholder={'Enter your email'}
            autoCorrect={false}
            keyboardType="email-address"
            autoCapitalize="none"
            onChangeText={text => {
              setEmailV(text);
              setEmailE('');
            }}
            onBlur={() => {}}
            onFocus={() => {}}
            containerStyle={{marginBottom: RFValue(15)}}
            eTxt={emailE}
          />
          <CustomLoginTextInput
            value={passwordV}
            icon={IconLinks.lockCloseFill}
            placeholder={'Enter your password'}
            autoCorrect={false}
            autoCapitalize="none"
            secure={true}
            onChangeText={text => {
              setPasswordV(text);
              setPasswordE('');
            }}
            onBlur={() => {}}
            onFocus={() => {}}
            containerStyle={{marginBottom: RFValue(15)}}
            eTxt={passwordE}
          />
        </View>
        <View style={styles.btnContainer}>
          <TouchableOpacity
            style={styles.signUpBtn}
            disabled={disabled}
            onPress={() => validation()}>
            <Image
              style={[
                styles.btnIcon,
                {tintColor: disabled ? Colors.LightGrey : Colors.Black},
              ]}
              source={IconLinks.login}
            />
            <Text
              style={[
                styles.btnTxt,
                {color: disabled ? Colors.LightGrey : Colors.Black},
              ]}>
              {'Login'}
            </Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.separatorTxt}>Or</Text>
        <View style={styles.btnContainer}>
          <TouchableOpacity
            style={styles.signUpBtn}
            onPress={() => btn_googleSignIn()}>
            <Image style={styles.btnIcon} source={IconLinks.google} />
            <Text style={styles.btnTxt}>{'Google'}</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.loSiNavContainer}>
          <Text style={styles.loSiTxt}>{'Create your new account?'}</Text>
          <TouchableOpacity
            style={styles.loSiNavBtn}
            onPress={() => navigation.replace('SignUp')}>
            <Text style={styles.loSiNavTxt}>{'SignUp'}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
