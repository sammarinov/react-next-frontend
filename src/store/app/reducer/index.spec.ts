import { IAction } from '@Redux/type';
import { IStoreApp } from '../type';
import ActionType from '../action-type';
import { AppReducer } from '.';

import featured from '@Static/data/featured.json';
import articles from '@Static/data/articles.json';
import social from '@Static/data/social.json';

describe('app reducer', () => {
  it('should return the initial state', () => {
    expect(AppReducer(undefined, {} as IAction<IStoreApp.Actions.IMapPayload>)).toEqual({
      name: '',
      articles,
      featured,
      social
    });
  });
  it('should return the initial state when state passed in', () => {
    expect(
      AppReducer(
        {
          name: '',
          articles,
          featured,
          social
        } as IStoreApp.IProps,
        {} as IAction<IStoreApp.Actions.IMapPayload>,
      ),
    ).toEqual({
      name: '',
      articles,
      featured,
      social
    });
  });

  it('should handle SET_APP', () => {
    const payload = {
      name: 'vtc-ltd',
      articles,
      featured,
      social
    };

    expect(
      AppReducer(undefined, {
        type: ActionType.SET_APP,
        payload,
      }),
    ).toEqual(payload);
  });
});
