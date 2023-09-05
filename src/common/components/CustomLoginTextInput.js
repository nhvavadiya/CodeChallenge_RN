import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import * as Colors from '../../assets/Colors';
import Fonts from '../../assets/Fonts';
import {RFValue} from 'react-native-responsive-fontsize';

export default CustomLoginTextInput = ({
  label,
  containerStyle,
  icon,
  secure,
  eTxt,
  ...props
}) => {
  const [hide, setHide] = useState(secure);
  return (
    <View style={[styles.container, containerStyle]}>
      <View style={styles.txtInputContainer}>
        {label ? <Text style={styles.labelTxt}>{label}</Text> : null}
        {icon ? <Image source={icon} style={styles.inputIcon} /> : null}
        <TextInput
          placeholderTextColor={Colors.DarkGrey}
          style={styles.txtInputStyle}
          secureTextEntry={hide}
          {...props}
        />
        {secure ? (
          <TouchableOpacity
            style={styles.btnStyle}
            onPress={() => setHide(!hide)}
            hitSlop={{top: 15, bottom: 15, right: 15, left: 15}}>
            <Image
              source={!hide ? IconLinks.eyeCloseFill : IconLinks.eyeOpenFill}
              style={styles.eyeIcon}
            />
          </TouchableOpacity>
        ) : null}
      </View>
      {eTxt ? <Text style={styles.errorTxtStyle}>{eTxt}</Text> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  txtInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.White,
    borderRadius: RFValue(4),
    paddingHorizontal: RFValue(10),
    shadowOpacity: 0.5,
    shadowRadius: RFValue(1),
    elevation: 3,
    shadowOffset: {
      height: 0,
      width: 0,
    },
  },
  labelTxt: {
    fontSize: RFValue(18),
    fontFamily: Fonts.Medium,
    color: Colors.Black,
    marginRight: RFValue(10),
  },
  inputIcon: {
    height: RFValue(20),
    width: RFValue(20),
    resizeMode: 'contain',
  },
  txtInputStyle: {
    flex: 1,
    padding: RFValue(10),
    color: Colors.Black,
  },
  btnStyle: {
    marginRight: RFValue(5),
  },
  eyeIcon: {
    height: RFValue(20),
    width: RFValue(20),
    resizeMode: 'contain',
  },
  errorTxtStyle: {
    marginHorizontal: RFValue(5),
    fontSize: RFValue(12),
    fontFamily: Fonts.Regular,
    color: Colors.Red,
    marginTop: RFValue(2),
    flexWrap: 'wrap',
  },
});
