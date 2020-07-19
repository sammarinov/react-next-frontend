
export interface IFeatured {
  id: number;
  caption: string;
  description: string;
  picture: string;
  favorite: string;
  price: string;
  actions: Array<string>;
  topFeatured: boolean;
}

export interface IFeaturedData {
  caption: string;
  data: Array<IFeatured>;
}

export interface IArticle {
  id: number;
  caption: string;
  description: string;
  picture: string;
  created: string;
  author: string;
}

export interface IArticlesData {
  caption: string;
  data: Array<IArticle>;
}

export interface ISocial {
  title: string;
  hideTitle: boolean;
  href: string;
  icon: {
    position: string;
    name: string;
  }
}

export interface ISocialData {
  caption: string;
  description: string;
  media: Array<ISocial>;
}

declare namespace IStoreApp {
  export interface IProps {
    name: string;
    articles: IArticlesData;
    featured: IFeaturedData;
    social: ISocialData;
  }

  namespace Actions {
    export interface IMapPayload extends IProps { }
  }
}

export { IStoreApp };
