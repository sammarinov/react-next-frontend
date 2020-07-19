import * as React from 'react';
import StyledHeader, { StyledLogo } from './styled';
import { Link } from '@Server/routes';

const Header: React.FunctionComponent = (): JSX.Element => {
  return (
    <StyledHeader>
      <Link route='/'>
        <StyledLogo src="/images/logo.gif" />
      </Link>
    </StyledHeader>
  );
};

export default Header;
