import {CURRENT_USER_REQUEST} from '../types';
export const CurrentUserAction = params => {
  return {
    type: CURRENT_USER_REQUEST,
    params,
  };
};
