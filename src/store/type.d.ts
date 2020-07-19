import { Action as ReduxAction } from 'redux';
import { IStoreApp } from '@Redux/app/type';

export interface IAction<T> extends ReduxAction {
  payload?: T;
  type: string;
}

export interface IStore {
  app: IStoreApp.IProps;
}
