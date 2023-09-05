import {StatusBar} from 'react-native';

export const emailRegEx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
export const phoneNumRegEx = /^[6-9]\d{9}$/;
export const passwordRegEx = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/; //8 letters, atleast 1 UpperCase, 1 number
export const passwordRegEx2 =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#^]).{8,}$/; //8 letters, atleast 1 UpperCase, 1 number, and special characters
export const nameRegEx = /^[A-Za-z]+(?: [A-Za-z]+)*\.?$/;
export const nameRegEx2 = /^[a-zA-Z\s.]{2,18}$/;

export const statusBarHeight = StatusBar.currentHeight;
