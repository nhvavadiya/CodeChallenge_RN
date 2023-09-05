import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import * as Colors from '../../assets/Colors';
import Fonts from '../../assets/Fonts';
import {RFValue} from 'react-native-responsive-fontsize';

export default HeaderComponent = ({headerStyle, title}) => {
  return (
    <View style={[styles.headerContainer, headerStyle]}>
      {title ? <Text style={styles.headerTxt}>{title}</Text> : null}
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
    flex: 1,
    fontSize: RFValue(24),
    fontFamily: Fonts.Medium,
    color: Colors.White,
    textAlign: 'center',
  },
});
