import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  SafeAreaView,
} from 'react-native';
import React from 'react';
import * as Colors from '../../assets/Colors';
import {statusBarHeight} from '../../assets/Constants';
import IconLinks from '../../assets/icons/IconLinks';
import Fonts from '../../assets/Fonts';
import {RFValue} from 'react-native-responsive-fontsize';

export default ShowItemScreen = ({navigation, route}) => {
  const {type, data} = route?.params;

  function btn_back() {
    navigation.goBack();
  }

  return (
    <View style={styles.container}>
      <SafeAreaView />
      <View style={styles.headerStyle}>
        <TouchableOpacity style={styles.backBtn} onPress={() => btn_back()}>
          <Image source={IconLinks.leftArrow} style={styles.backBtnIcon} />
        </TouchableOpacity>
        <View style={styles.headerTitleContainer}>
          <Text style={styles.headerTitleTxt}>
            {type === 'todo' ? 'To Do' : 'Post'}
          </Text>
        </View>
      </View>

      <View style={styles.mainContainer}>
        <View style={styles.detailsContainer}>
          <View style={styles.detailsRow}>
            <Text style={styles.detailKeyTxt}>
              {type === 'todo' ? 'Task:' : 'Post:'}
            </Text>
            <Text style={styles.detailValueTxt}>{data?.id}</Text>
          </View>
          <View style={styles.detailsRow}>
            <Text style={styles.detailKeyTxt}>{'UserID:'}</Text>
            <Text style={styles.detailValueTxt}>{data?.userId}</Text>
          </View>
          <View style={styles.detailsRow}>
            <Text style={styles.detailKeyTxt}>{'Title:'}</Text>
            <Text style={styles.detailValueTxt}>{data?.title}</Text>
          </View>
          {type === 'todo' ? (
            <View style={styles.detailsRow}>
              <Text style={styles.detailKeyTxt}>{'Status:'}</Text>
              <Text style={styles.detailValueTxt}>
                {data?.completed ? 'Completed' : 'Pending'}
              </Text>
            </View>
          ) : (
            <View style={styles.detailsRow}>
              <Text style={styles.detailKeyTxt}>{'Body:'}</Text>
              <Text style={styles.detailValueTxt}>{`${data?.body}`}</Text>
            </View>
          )}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.Black11,
    paddingTop: statusBarHeight,
  },
  headerStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingHorizontal: RFValue(10),
    height: RFValue(50),
  },
  backBtnIcon: {height: RFValue(30), width: RFValue(30), resizeMode: 'contain'},
  backBtn: {
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: RFValue(10),
  },
  headerTitleContainer: {
    flex: 1,
    alignItems: 'flex-end',
    paddingRight: RFValue(20),
    justifyContent: 'center',
  },
  headerTitleTxt: {
    color: Colors.Black,
    fontSize: RFValue(24),
    fontFamily: Fonts.Medium,
  },
  mainContainer: {
    flex: 1,
    paddingHorizontal: RFValue(20),
    paddingTop: RFValue(15),
  },
  detailsContainer: {
    width: '100%',
    paddingVertical: RFValue(20),
    paddingHorizontal: RFValue(10),
    paddingHorizontal: RFValue(15),
    borderRadius: RFValue(6),
    backgroundColor: Colors.White,
    shadowOpacity: 0.5,
    shadowRadius: RFValue(1),
    elevation: 2,
    shadowOffset: {
      height: 0,
      width: 0,
    },
  },
  detailsRow: {
    flexDirection: 'row',
    paddingVertical: RFValue(5),
    paddingHorizontal: RFValue(5),
  },
  detailKeyTxt: {
    flex: 1.2,
    fontSize: RFValue(14),
    color: Colors.Black,
    fontFamily: Fonts.Medium,
    textAlign: 'right',
  },
  detailValueTxt: {
    flex: 4,
    fontSize: RFValue(14),
    color: Colors.Black,
    fontFamily: Fonts.Regular,
    marginLeft: RFValue(7),
  },
});
