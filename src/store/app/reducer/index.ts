import { IAction } from '@Redux/type';
import { IStoreApp } from '../type';
import ActionType from '../action-type';

import featured from '@Static/data/featured.json';
import articles from '@Static/data/articles.json';
import social from '@Static/data/social.json';

const INITIAL_STATE: IStoreApp.IProps = {
  name: '',
  articles,
  featured,
  social
};

export const AppReducer = (
  state = INITIAL_STATE,
  action: IAction<IStoreApp.Actions.IMapPayload>,
) => {
  switch (action.type) {
    case ActionType.SET_APP:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};
