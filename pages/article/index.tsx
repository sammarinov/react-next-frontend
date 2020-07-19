import * as React from 'react';
import { NextPage } from 'next';

import { withTranslation, namespaces } from '@Server/i18n';

import { ReduxNextPageContext } from '@Interfaces';
import Head from 'next/head';
import Layout from '@Components/layout';
import { setApp } from '@Redux/actions';
import { IArticle } from '@Redux/app/type'
import ArticleCard from '@Components/article-card';

import "../styles.scss";
import { filterArticles } from '@Utils/filters';
import { IArticleBoardProps } from '@Interfaces/pages/article-board';

const ArticleBoard: NextPage<IArticleBoardProps.IProps, IArticleBoardProps.InitialProps> = ({ t, name, data, caption }) => (
    <>
        <Head>
            <title>{t(caption)}</title>
            <meta name="description" content="home page" />
        </Head>
        <Layout>
            <main>
                <h2 className="full-category-label">{t('ARTICLES')}</h2>

                {data.map((item: IArticle, index: number) =>
                    <ArticleCard item={item} key={item.caption + index} />
                )}
            </main>
        </Layout>
    </>
);

ArticleBoard.getInitialProps = async (ctx: ReduxNextPageContext): Promise<IArticleBoardProps.InitialProps> => {
    const { dispatch } = ctx.store;
    await dispatch(setApp());
    const data = ctx.store.getState().app;
    return {
        namespacesRequired: [namespaces.ARTICLE_BOARD],
        ...data,
        caption: data.articles.caption,
        data: filterArticles(data.articles.data)
    };
};

export default withTranslation(namespaces.ARTICLE_BOARD)(ArticleBoard);
