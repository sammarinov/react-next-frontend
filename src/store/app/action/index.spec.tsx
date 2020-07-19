import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import ActionConsts from '../action-type';
import { setApp } from '.';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('App action tests', () => {
  test('setApp', async () => {
    const store = mockStore();

    const expectedActions = [
      {
        payload: {
          name: 'Frontend challenge',
        },
        type: ActionConsts.SET_APP,
      },
    ];

    store.dispatch(setApp());
    expect(store.getActions()).toEqual(expectedActions);
  });
});
