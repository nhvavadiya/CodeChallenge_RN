import {StyleSheet, Text, View, Modal, TouchableOpacity} from 'react-native';
import React from 'react';
import * as Colors from '../../assets/Colors';
import Fonts from '../../assets/Fonts';
import {RFValue} from 'react-native-responsive-fontsize';

export default LogoutModal = ({showMoadal, onLogout, onCancel}) => {
  return (
    <Modal visible={showMoadal} statusBarTranslucent transparent={true}>
      <View style={styles.containerStyle}>
        <View style={styles.mainContainer}>
          <Text style={styles.alertTitleTxt}>
            {'Are you sure you want to logout?'}
          </Text>
          <View style={styles.btnContainer}>
            <TouchableOpacity
              style={[styles.btn, {marginRight: 10}]}
              onPress={() => onCancel()}>
              <Text
                style={[
                  styles.btnTxt,
                  {
                    color: Colors.Black,
                  },
                ]}>
                {'Cancel'}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn} onPress={() => onLogout()}>
              <Text
                style={[
                  styles.btnTxt,
                  {
                    color: Colors.Red,
                  },
                ]}>
                {'Logout'}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerStyle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  mainContainer: {
    backgroundColor: Colors.White,
    width: '80%',
    padding: RFValue(20),
    borderRadius: RFValue(8),
  },
  alertTitleTxt: {
    color: Colors.Black,
    textAlign: 'center',
    fontSize: RFValue(16),
    fontFamily: Fonts.Regular,
    marginTop: RFValue(10),
  },
  btnContainer: {flexDirection: 'row', marginTop: RFValue(30)},
  btn: {
    paddingVertical: RFValue(10),
    borderRadius: RFValue(5),
    backgroundColor: Colors.White,
    flex: 1,
    shadowOpacity: 0.5,
    shadowRadius: RFValue(1),
    elevation: 2,
    shadowOffset: {
      height: 0,
      width: 0,
    },
  },
  btnTxt: {
    textAlign: 'center',
    fontSize: RFValue(16),
    fontFamily: Fonts.Regular,
  },
});
