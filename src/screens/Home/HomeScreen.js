import {SafeAreaView, StyleSheet, View} from 'react-native';
import React, {useContext, useRef, useState} from 'react';
import {statusBarHeight} from '../../assets/Constants';
import CustomFullLoader from '../../common/components/CustomFullLoader';
import * as Colors from '../../assets/Colors';
import HomeHeader from './HomeHeader';
import RenderDataComponent from './RenderDataComponent';
import CustomModal from '../../common/components/CustomModal';
import {Context} from '../../../global/ContextProvider';

export default HomeScreen = ({navigation}) => {
  const {currentSelected} = useContext(Context);
  const [loader, setLoader] = useState(true);
  const bottomSheet = useRef(null);

  return (
    <View style={styles.container}>
      <SafeAreaView />
      <CustomFullLoader
        loaderSize={'large'}
        showLoader={loader}
        loaderColor={Colors.DarkGreen}
      />
      <HomeHeader />
      <RenderDataComponent setLoader={setLoader} navigation={navigation} />
      <CustomModal
        currentSelected={currentSelected}
        bottomSheetRef={bottomSheet}
        navigation={navigation}
        setLoader={setLoader}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: statusBarHeight,
  },
});
