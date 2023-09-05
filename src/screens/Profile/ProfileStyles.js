import {StyleSheet} from 'react-native';
import * as Colors from '../../assets/Colors';
import {statusBarHeight} from '../../assets/Constants';
import Fonts from '../../assets/Fonts';
import {RFValue} from 'react-native-responsive-fontsize';

export const ProfileStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mainContainer: {
    flex: 1,
    paddingTop: statusBarHeight + RFValue(20),
    paddingHorizontal: RFValue(20),
    paddingBottom: RFValue(50),
  },
  profileContainer: {
    alignSelf: 'center',
    marginBottom: RFValue(10),
  },
  profileImage: {
    height: RFValue(120),
    width: RFValue(120),
    resizeMode: 'contain',
  },
  userDetailContainer: {flex: 1, paddingTop: RFValue(40)},
  btnContainer: {
    width: '100%',
    paddingHorizontal: RFValue(20),
  },
  userDataRow: {
    backgroundColor: Colors.White,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: RFValue(10),
    paddingVertical: RFValue(10),
    paddingHorizontal: RFValue(15),
    borderRadius: RFValue(4),
    shadowOpacity: 0.5,
    shadowRadius: RFValue(1),
    elevation: 1,
    shadowOffset: {
      height: 0,
      width: 0,
    },
  },
  userDataIcon: {
    height: RFValue(20),
    width: RFValue(20),
    resizeMode: 'contain',
  },
  userDetailTxt: {
    fontSize: RFValue(15),
    fontFamily: Fonts.Regular,
    color: Colors.Black,
    marginLeft: RFValue(10),
  },
  logoutBtn: {
    backgroundColor: Colors.White,
    flexDirection: 'row',
    width: '100%',
    paddingVertical: RFValue(7),
    borderRadius: RFValue(5),
    justifyContent: 'center',
    alignItems: 'center',
    shadowOpacity: 0.5,
    shadowRadius: RFValue(1),
    elevation: 1.5,
    shadowOffset: {
      height: 0,
      width: 0,
    },
  },
  btnIcon: {
    height: RFValue(20),
    width: RFValue(20),
    marginRight: RFValue(10),
    tintColor: Colors.Red,
  },
  btnTxt: {
    textAlign: 'center',
    fontSize: RFValue(18),
    fontFamily: Fonts.Regular,
    color: Colors.Red,
  },
});
