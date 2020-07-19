import * as React from 'react';
import { NextPage } from 'next';
import Head from 'next/head';
import { withTranslation, namespaces } from '@Server/i18n';
import { IErrorPage } from '@Interfaces';
import SomethingWrong from '@Components/something-wrong';
import Layout from '@Components/layout';

const Error: NextPage<IErrorPage.IProps, IErrorPage.InitialProps> = ({ t }) => (
  <>
    <Head>
      <title>{t('PAGE_TITLE')}</title>
      <meta name="description" content="error page" />
    </Head>
    <Layout>
      <SomethingWrong />
    </Layout>
  </>
);

Error.getInitialProps = async ({ res, err }) => {
  let statusCode;

  if (res) {
    ({ statusCode } = res);
  } else if (err) {
    ({ statusCode } = err);
  }

  return {
    namespacesRequired: [namespaces.ERRORPAGE],
    statusCode,
  };
};

export default withTranslation(namespaces.ERRORPAGE)(Error);
