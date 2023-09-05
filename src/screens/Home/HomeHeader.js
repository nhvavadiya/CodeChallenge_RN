import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import * as Colors from '../../assets/Colors';
import moment from 'moment';
import {useSelector} from 'react-redux';
import Fonts from '../../assets/Fonts';
import {RFValue} from 'react-native-responsive-fontsize';

export default HomeHeader = ({headerStyle}) => {
  const CurrentUser = useSelector(state => state.CurrentUserReducer);

  const [greetTitle, setGreetTitle] = useState('');
  const [userName, setUserName] = useState('');

  function headerTitle(user) {
    setUserName(user?.name);
    const currentTime = moment();
    let title = '';
    if (
      currentTime.isBetween(moment('04:00', 'HH:mm'), moment('12:00', 'HH:mm'))
    ) {
      title = 'Good Morning,';
      setGreetTitle(title);
    }
    if (
      currentTime.isBetween(moment('12:00', 'HH:mm'), moment('16:00', 'HH:mm'))
    ) {
      title = 'Good Afternoon,';
      setGreetTitle(title);
    } else if (
      currentTime.isBetween(moment('16:00', 'HH:mm'), moment('23:59', 'HH:mm'))
    ) {
      title = 'Good Night,';
      setGreetTitle(title);
    } else if (
      currentTime.isBetween(moment('00:00', 'HH:mm'), moment('04:00', 'HH:mm'))
    ) {
      title = 'Good Night,';
      setGreetTitle(title);
    }
  }
  useEffect(() => {
    if (CurrentUser?.CurrentUserSuccess) {
      if (CurrentUser?.data) {
        headerTitle(CurrentUser?.data);
      }
    }
  }, [CurrentUser]);
  return (
    <View style={[styles.headerContainer, headerStyle]}>
      <Text style={styles.headerTxt}>
        {greetTitle} <Text style={styles.userNameTxt}>{userName}</Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: RFValue(50),
    marginTop: RFValue(10),
  },
  headerTxt: {
    fontSize: RFValue(18),
    fontFamily: Fonts.Medium,
    color: Colors.Black,
  },
  userNameTxt: {
    color: Colors.Black,
  },
});
