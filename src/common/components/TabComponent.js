import React, {useContext} from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import * as Colors from '../../assets/Colors';
import Fonts from '../../assets/Fonts';
import {RFValue} from 'react-native-responsive-fontsize';

const TabComponent = ({label, accessibilityState, onPress, onLongPress}) => {
  const focused = accessibilityState.selected;

  return (
    <TouchableOpacity
      hitSlop={{left: 10, right: 10, top: 10, bottom: 10}}
      activeOpacity={1}
      style={styles.btn}
      onLongPress={onLongPress}
      onPress={onPress}>
      <Text
        style={[
          styles.labelTxt,
          {color: focused ? Colors.Black : Colors.DarkGrey},
        ]}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

export default TabComponent;

const styles = StyleSheet.create({
  btn: {
    flex: 1,
    paddingTop: RFValue(6),
    paddingHorizontal: RFValue(35),
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: RFValue(10),
  },
  labelTxt: {
    fontSize: RFValue(18),
    fontFamily: Fonts.Medium,
  },
});
