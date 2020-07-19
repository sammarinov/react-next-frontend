import * as React from 'react';
import App, { AppInitialProps } from 'next/app';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import withRedux from 'next-redux-wrapper';
import { theme } from '@Definitions/styled';
import { appWithTranslation } from '@Server/i18n';
import { AppWithStore } from '@Interfaces';
import { makeStore } from '@Redux';

import '@Utils/fontawesome';
import '@Static/css/main.scss';

class ChallengeApp extends App<AppWithStore> {
  static async getInitialProps({ Component, ctx }: any): Promise<AppInitialProps> {
    const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};

    return { pageProps };
  }

  render() {
    const { Component, pageProps, store } = this.props;

    return (
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </Provider>
    );
  }
}

export default withRedux(makeStore)(appWithTranslation(ChallengeApp));
