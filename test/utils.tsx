import * as React from 'react';
import { render, RenderOptions } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { theme } from '@Definitions/styled';
import { createStore } from 'redux';
import Reducers from '@Redux/reducers';
import { Provider } from 'react-redux';

import "@Utils/fontawesome";

const customRender = (
  ui: React.ReactElement,
  {
    initialState,
    store = createStore(Reducers, initialState),
    ...options
  } = {}
) => {

  function Wrapper({ children }) {
    return (
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          {children}
        </ThemeProvider>
      </Provider>
    );
  }
  return render(ui, { wrapper: Wrapper, ...options })
}

export * from '@testing-library/react';
export { customRender as render };