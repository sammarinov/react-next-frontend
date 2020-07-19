import * as React from 'react';
import { NextPage } from 'next';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { withTranslation, namespaces } from '@Server/i18n';

import { IHomePage, ReduxNextPageContext } from '@Interfaces';
import Head from 'next/head';
import Layout from '@Components/layout';
import { setApp } from '@Redux/actions';
import { IFeatured, IArticle } from '@Redux/app/type'
import FeaturedCard from '@Components/featured-card';
import ArticleCard from '@Components/article-card';

import "./styles.scss";
import { filterFeatured, filterArticles } from '@Utils/filters';
import { Button } from '@Components/basic/button';
import { Router } from '@Server/routes';

const Home: NextPage<IHomePage.IProps, IHomePage.InitialProps> = ({ t, name, featured, articles }) => (
  <>
    <Head>
      <title>{t('HOMEPAGE_TITLE')}</title>
      <meta name="description" content="home page" />
    </Head>
    <Layout>
      <main>
        <div className="category-label">{t('TOP_FEATURED')}</div>

        <div className="view-more">
          <Button bgColor="BLACK_27" inverted curved columns="0,50" onClick={() => Router.pushRoute('/featured-board')}>
            <span>{t('VIEW_MORE')}</span>
            <FontAwesomeIcon icon="arrow-right" />
          </Button>
        </div>

        {featured.map((item: IFeatured, index: number) =>
          <FeaturedCard item={item} key={item.caption + index} className="card" />
        )}

        <div className="category-label">{t('ARTICLES')}</div>

        <div className="view-more">
          <Button bgColor="BLACK_27" inverted curved columns="0,50" onClick={() => Router.pushRoute('/article-board')}>
            <span>{t('VIEW_MORE')}</span>
            <FontAwesomeIcon icon="arrow-right" />
          </Button>
        </div>

        {articles.map((item: IArticle, index: number) =>
          <ArticleCard item={item} key={item.caption + index} />
        )}
      </main>
    </Layout>
  </>
);

Home.getInitialProps = async (ctx: ReduxNextPageContext): Promise<IHomePage.InitialProps> => {
  const { dispatch } = ctx.store;
  await dispatch(setApp());
  const data = ctx.store.getState().app;
  return {
    namespacesRequired: [namespaces.HOMEPAGE],
    ...data,
    featured: filterFeatured(data.featured.data, 4),
    articles: filterArticles(data.articles.data, 4)
  };
};

export default withTranslation(namespaces.HOMEPAGE)(Home);
