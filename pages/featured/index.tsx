import * as React from 'react';
import { NextPage } from 'next';

import { withTranslation, namespaces } from '@Server/i18n';

import { ReduxNextPageContext } from '@Interfaces';
import Head from 'next/head';
import Layout from '@Components/layout';
import { setApp } from '@Redux/actions';
import { IFeatured } from '@Redux/app/type'
import FeaturedCard from '@Components/featured-card';

import "../styles.scss";
import { filterFeatured } from '@Utils/filters';
import { IFeaturedBoardProps } from '@Interfaces/pages/featured-board';

const FeaturedBoard: NextPage<IFeaturedBoardProps.IProps, IFeaturedBoardProps.InitialProps> = ({ t, name, data, caption }) => (
    <>
        <Head>
            <title>{t(caption)}</title>
            <meta name="description" content="home page" />
        </Head>
        <Layout>
            <main>
                <h2 className="full-category-label">{t('FEATURED')}</h2>

                {data.map((item: IFeatured, index: number) =>
                    <FeaturedCard item={item} key={item.caption + index} className="card" />
                )}
            </main>
        </Layout>
    </>
);

FeaturedBoard.getInitialProps = async (ctx: ReduxNextPageContext): Promise<IFeaturedBoardProps.InitialProps> => {
    const { dispatch } = ctx.store;
    await dispatch(setApp());
    const data = ctx.store.getState().app;
    return {
        namespacesRequired: [namespaces.FEATURED_BOARD],
        ...data,
        caption: data.featured.caption,
        data: filterFeatured(data.featured.data)
    };
};

export default withTranslation(namespaces.FEATURED_BOARD)(FeaturedBoard);
