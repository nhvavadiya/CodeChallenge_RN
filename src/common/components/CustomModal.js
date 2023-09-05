import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useContext} from 'react';
import * as Colors from '../../assets/Colors';
import {Context} from '../../../global/ContextProvider';
import IconLinks from '../../assets/icons/IconLinks';
import {GetTodoDataAction} from '../../redux/action/GetTodoDataAction';
import {GetPostsDataAction} from '../../redux/action/GetPostsDataAction';
import {useDispatch} from 'react-redux';
import BottomSheet, {BottomSheetView} from '@gorhom/bottom-sheet';
import Fonts from '../../assets/Fonts';
import {RFValue} from 'react-native-responsive-fontsize';

const {height, width} = Dimensions.get('screen');

export default CustomModal = ({
  bottomSheetRef,
  currentSelected,
  setLoader,
  isProfile,
}) => {
  const dispatch = useDispatch();
  const {setCurrentSelected} = useContext(Context);

  function btn_todo() {
    setLoader(true);
    setCurrentSelected('todo');
    dispatch(GetTodoDataAction());
    bottomSheetRef.current.collapse();
  }
  function btn_posts() {
    setLoader(true);
    setCurrentSelected('posts');
    dispatch(GetPostsDataAction());
    bottomSheetRef.current.collapse();
  }

  return (
    <BottomSheet
      ref={bottomSheetRef}
      backgroundStyle={styles.bottomSheetStyle}
      snapPoints={['4%', '30%']}>
      <BottomSheetView style={styles.main}>
        <View style={styles.container}>
          <TouchableOpacity
            disabled={currentSelected === 'todo' || isProfile}
            style={[styles.dataBtnStyle, {marginBottom: RFValue(20)}]}
            onPress={() => btn_todo()}>
            <Image
              style={[
                styles.btnIcon,
                {
                  tintColor:
                    currentSelected === 'todo' || isProfile
                      ? Colors.LightGrey
                      : '#333333',
                },
              ]}
              source={IconLinks.taskFill}
            />
            <Text
              style={[
                styles.btnTxt,
                {
                  color:
                    currentSelected === 'todo' || isProfile
                      ? Colors.LightGrey
                      : Colors.Black,
                },
              ]}>
              {'ToDo'}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            disabled={currentSelected === 'posts' || isProfile}
            style={styles.dataBtnStyle}
            onPress={() => btn_posts()}>
            <Image
              style={[
                styles.btnIcon,
                {
                  tintColor:
                    currentSelected === 'posts' || isProfile
                      ? Colors.LightGrey
                      : '#333333',
                },
              ]}
              source={IconLinks.postFill}
            />
            <Text
              style={[
                styles.btnTxt,
                {
                  color:
                    currentSelected === 'posts' || isProfile
                      ? Colors.LightGrey
                      : Colors.Black,
                },
              ]}>
              {'Posts'}
            </Text>
          </TouchableOpacity>
        </View>
      </BottomSheetView>
    </BottomSheet>
  );
};

const styles = StyleSheet.create({
  bottomSheetStyle: {
    elevation: 5,
    shadowOpacity: 0.5,
    shadowOffset: {height: 0, width: 0},
    shadowRadius: RFValue(2),
  },
  main: {
    height: height * 0.25,
    width: '100%',
  },
  container: {
    flex: 1,
    padding: RFValue(40),
    justifyContent: 'center',
  },
  dataBtnStyle: {
    backgroundColor: Colors.White,
    flexDirection: 'row',
    width: '100%',
    paddingVertical: RFValue(7),
    borderRadius: RFValue(5),
    justifyContent: 'center',
    alignItems: 'center',
    shadowOpacity: 0.5,
    shadowRadius: RFValue(1),
    elevation: 1,
    shadowOffset: {
      height: 0,
      width: 0,
    },
  },
  btnStyleView: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    paddingHorizontal: RFValue(40),
    paddingBottom: RFValue(30),
  },
  btnIcon: {
    height: RFValue(20),
    width: RFValue(20),
    marginRight: RFValue(10),
    tintColor: '#333333',
  },
  btnTxt: {
    textAlign: 'center',
    fontSize: RFValue(18),
    fontFamily: Fonts.Regular,
    color: Colors.Black,
  },
});
