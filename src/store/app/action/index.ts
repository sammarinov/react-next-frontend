import { Dispatch } from 'redux';
import app from '@Config/app.json';
import actionType from '../action-type';

export const setApp = () => (dispatch: Dispatch) => {
  dispatch({
    payload: app,
    type: actionType.SET_APP,
  });
};
