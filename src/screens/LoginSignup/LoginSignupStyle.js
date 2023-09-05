import {StyleSheet} from 'react-native';
import * as Colors from '../../assets/Colors';
import {statusBarHeight} from '../../assets/Constants';
import Fonts from '../../assets/Fonts';
import {RFValue} from 'react-native-responsive-fontsize';
export const LoginSignupStyle = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: statusBarHeight,
  },
  headerContainer: {
    paddingBottom: RFValue(10),
    paddingTop: RFValue(20),
    alignItems: 'center',
  },
  headerTxt: {
    fontSize: RFValue(30),
    fontFamily: Fonts.Bold,
    color: Colors.Black,
  },
  mainContainer: {
    flex: 1,
    marginHorizontal: RFValue(20),
    paddingTop: RFValue(20),
  },
  emailLoginContainer: {
    marginTop: RFValue(20),
  },
  separatorTxt: {
    textAlign: 'center',
    fontSize: RFValue(20),
    fontFamily: Fonts.Medium,
    color: Colors.Black,
    marginVertical: RFValue(30),
  },
  btnContainer: {
    width: '100%',
  },
  signUpBtn: {
    backgroundColor: 'white',
    flexDirection: 'row',
    width: '100%',
    paddingVertical: RFValue(7),
    borderRadius: RFValue(5),
    justifyContent: 'center',
    alignItems: 'center',
    shadowOpacity: 0.5,
    shadowRadius: RFValue(1),
    elevation: 3,
    shadowOffset: {
      height: 0,
      width: 0,
    },
  },
  btnIcon: {
    height: RFValue(20),
    width: RFValue(20),
    marginRight: RFValue(10),
  },
  btnTxt: {
    textAlign: 'center',
    fontSize: RFValue(16),
    fontFamily: Fonts.Medium,
    color: Colors.Black,
  },
  loSiNavContainer: {
    backgroundColor: Colors.White,
    marginTop: RFValue(25),
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loSiTxt: {
    fontSize: RFValue(12),
    fontFamily: Fonts.Regular,
    color: Colors.Black,
  },
  loSiNavBtn: {marginLeft: RFValue(5)},
  loSiNavTxt: {
    fontSize: RFValue(14),
    fontFamily: Fonts.Medium,
    color: Colors.Black,
  },
});
