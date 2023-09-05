import {RESET_ALL_DATA} from '../types';
export const ResetDataAction = params => {
  return {
    type: RESET_ALL_DATA,
    params,
  };
};
