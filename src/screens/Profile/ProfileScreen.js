import {Image, SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import React, {useContext, useEffect, useRef, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Context} from '../../../global/ContextProvider';
import CustomModal from '../../common/components/CustomModal';
import IconLinks from '../../assets/icons/IconLinks';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {ProfileStyles as styles} from './ProfileStyles';
import {ResetDataAction} from '../../redux/action/ResetDataAction';
import LogoutModal from '../../common/components/LogoutModal';

export default ProfileScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const bottomSheet = useRef(null);
  const {setIsUserLoggedIn} = useContext(Context);
  const CurrentUser = useSelector(state => state.CurrentUserReducer);
  const [userData, setUserData] = useState({});
  const [showModal, setShowModal] = useState(false);

  async function btn_logout() {
    if (userData?.googleLogin) {
      try {
        await GoogleSignin.signOut().then(async () => {
          await AsyncStorage.removeItem('currentUser');
          setShowModal(false);
          dispatch(ResetDataAction());

          setIsUserLoggedIn(false);
        });
      } catch (error) {
        console.error('Google logout error ', error);
      }
    } else {
      await AsyncStorage.removeItem('currentUser');
      setShowModal(false);
      dispatch(ResetDataAction());
      setIsUserLoggedIn(false);
    }
  }
  function btn_cancel() {
    setShowModal(false);
  }

  useEffect(() => {
    if (CurrentUser?.CurrentUserSuccess) {
      if (CurrentUser?.data) {
        setUserData(CurrentUser?.data);
      }
    }
  }, [CurrentUser]);

  return (
    <View style={styles.container}>
      <SafeAreaView />

      <View style={styles.mainContainer}>
        <View style={styles.profileContainer}>
          <Image style={styles.profileImage} source={IconLinks.profileLarge} />
        </View>
        <View style={styles.userDetailContainer}>
          <View style={styles.userDataRow}>
            <Image source={IconLinks.profileFill} style={styles.userDataIcon} />
            <Text style={styles.userDetailTxt}>{userData?.name}</Text>
          </View>
          <View style={styles.userDataRow}>
            <Image source={IconLinks.mailFill} style={styles.userDataIcon} />
            <Text style={styles.userDetailTxt}>{userData?.email}</Text>
          </View>
        </View>
        <TouchableOpacity
          style={styles.logoutBtn}
          onPress={() => setShowModal(true)}>
          <Image style={styles.btnIcon} source={IconLinks.logout} />
          <Text style={styles.btnTxt}>{'Logout'}</Text>
        </TouchableOpacity>
      </View>
      <CustomModal
        bottomSheetRef={bottomSheet}
        navigation={navigation}
        isProfile={true}
      />
      <LogoutModal
        showMoadal={showModal}
        onLogout={btn_logout}
        onCancel={btn_cancel}
      />
    </View>
  );
};
