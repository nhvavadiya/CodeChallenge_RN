import {StatusBar, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './src/redux/reducer';
import {rootSaga} from './src/redux/saga';
import Router from './src/navigation/Router';
import ContextProvider from './global/ContextProvider';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);
const App = () => {
  return (
    <Provider store={store}>
      <ContextProvider>
        <StatusBar
          translucent
          barStyle={'dark-content'}
          backgroundColor={'transparent'}
        />
        <NavigationContainer>
          <Router />
        </NavigationContainer>
      </ContextProvider>
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({});
