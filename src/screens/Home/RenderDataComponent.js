import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';
import * as Colors from '../../assets/Colors';
import {useDispatch, useSelector} from 'react-redux';
import {Context} from '../../../global/ContextProvider';
import {GetTodoDataAction} from '../../redux/action/GetTodoDataAction';
import {RFValue} from 'react-native-responsive-fontsize';
import Fonts from '../../assets/Fonts';

export default RenderDataComponent = ({setLoader, navigation}) => {
  const dispatch = useDispatch();
  const {currentSelected} = useContext(Context);
  const [data, setData] = useState([]);
  const GetTodoData = useSelector(state => state.GetTodoDataReducer);
  const GetPostsData = useSelector(state => state.GetPostsDataReducer);

  function btn_itemPressed(item) {
    navigation.navigate('ShowItem', {data: item, type: currentSelected});
  }

  useEffect(() => {
    // calling a default action when the homescreen is rendered
    dispatch(GetTodoDataAction());
  }, []);

  useEffect(() => {
    if (currentSelected === 'todo') {
      // if currently, todo is selected
      if (GetTodoData?.GetTodoDataSuccess) {
        if (GetTodoData?.data) {
          // when the data in redux store is changed after calling the action
          setLoader(false);
          setData(GetTodoData?.data);
        }
      }
    } else if (currentSelected === 'posts') {
      // if currently, posts is selected
      if (GetPostsData?.GetPostsDataSuccess) {
        if (GetPostsData?.data) {
          // when the data in redux store is changed after calling the action
          setData(GetPostsData?.data);
          setLoader(false);
        }
      }
    }
  }, [GetPostsData, GetTodoData]);
  return (
    <View style={styles.container}>
      <FlatList
        initialNumToRender={30}
        contentContainerStyle={styles.flatlistContentContainer}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <View style={styles.flatlistHeaderContainer}>
            <Text style={styles.flatlistHeaderTxt}>
              {currentSelected === 'todo' ? 'Todo List' : 'Post List'}
            </Text>
          </View>
        }
        data={data}
        keyExtractor={(item, index) => item.id.toString()}
        ItemSeparatorComponent={() => (
          <View style={styles.flatlistItemSeparator} />
        )}
        extraData={data}
        renderItem={({item, index}) => (
          <TouchableOpacity
            style={styles.itemBtnStyle}
            onPress={() => btn_itemPressed(item)}>
            <Text style={styles.titleTxt} numberOfLines={1}>
              {item?.title}
            </Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: RFValue(20),
  },
  flatlistContentContainer: {
    paddingBottom: RFValue(50),
    paddingVertical: RFValue(20),
  },
  flatlistItemSeparator: {
    marginVertical: RFValue(5),
    borderBottomWidth: RFValue(0.6),
    borderColor: Colors.LightGrey,
  },
  flatlistHeaderContainer: {marginBottom: RFValue(10)},
  flatlistHeaderTxt: {
    color: Colors.DarkGrey,
    fontFamily: Fonts.Medium,
    fontSize: RFValue(24),
    textAlign: 'center',
  },
  itemBtnStyle: {
    flexDirection: 'row',
    paddingVertical: RFValue(5),
  },
  bulletTxt: {color: Colors.DarkGrey},
  titleTxt: {
    color: Colors.Black,
    flexWrap: 'wrap',
    marginHorizontal: RFValue(10),
  },
});
