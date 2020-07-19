import * as React from 'react';
import Link from 'next/link';
import { withTranslation, namespaces } from '@Server/i18n';
import { IGeneric } from '@Interfaces/general';
import { Button } from '@Components/basic/button';
import StyledHeader, { StyledButtonWrapper } from './styled';

const SomethingWrong: React.FunctionComponent<IGeneric.IPropsWithTranslation> = ({
  t,
}): JSX.Element => {
  return (
    <>
      <StyledHeader>{t('SOMETHING_WRONG')}</StyledHeader>
      <Link href="/">
        <StyledButtonWrapper>
          <Button>{t('GO_BACK')}</Button>
        </StyledButtonWrapper>
      </Link>
    </>
  );
};

export default withTranslation(namespaces.ERRORPAGE)(SomethingWrong);
