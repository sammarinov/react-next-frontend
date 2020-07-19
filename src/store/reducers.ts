import { combineReducers } from 'redux';

import { AppReducer } from './app/reducer';
import { IStore } from './type';

export default combineReducers<IStore>({
  app: AppReducer,
});
