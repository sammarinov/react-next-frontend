import NextI18Next from 'next-i18next';

const NextI18NextInstance = new NextI18Next({
  defaultLanguage: 'en',
  otherLanguages: [], // add other languages here
  localePath: 'public/static/locales',
  defaultNS: 'translations',
});

export const { appWithTranslation, withTranslation } = NextI18NextInstance;

export default NextI18NextInstance;

export const namespaces = {
  HOMEPAGE: 'home-page',
  ERRORPAGE: 'error-page',
  COMMON: 'translations',
  FEATURED_BOARD: 'featured-board',
  ARTICLE_BOARD: 'article-board',
  FOOTER: 'footer'
};
