import * as React from 'react';
import Header from '@Components/header';
import Footer from '@Components/footer';
import { IGeneric } from '@Interfaces/general';

const Layout: React.FunctionComponent<IGeneric.IPropsWithChildren> = ({
  children
}): JSX.Element => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
