import {ActivityIndicator, Modal, StyleSheet, View} from 'react-native';
import React from 'react';
import * as Colors from '../../assets/Colors';

export default CustomFullLoader = ({showLoader, loaderSize, loaderColor}) => {
  return (
    <Modal visible={showLoader} statusBarTranslucent transparent={true}>
      <View style={styles.containerStyle}>
        <ActivityIndicator
          style={styles.activityIndicator}
          size={loaderSize ? loaderSize : 'large'}
          color={loaderColor ? loaderColor : Colors.Green}
        />
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
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
    flex: 1,
    paddingHorizontal: 40,
  },
  activityIndicator: {
    backgroundColor: Colors.White,
    padding: 25,
    borderRadius: 8,
    justifyContent: 'center',
  },
});
