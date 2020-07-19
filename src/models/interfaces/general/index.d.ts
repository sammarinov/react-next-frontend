import { WithTranslation } from 'next-i18next';

declare namespace IGeneric {
  export interface IPropsWithTranslation extends WithTranslation {}
  export interface IPropsWithChildren {
    children: JSX.Element[] | JSX.Element;
  }
}

export { IGeneric };
