import * as React from 'react';

import { render } from '@Test/utils';
import SomethingWrong from './index';

describe('SomethingWrong', () => {
  it('should match snapshot', () => {
    const { container } = render(<SomethingWrong />);
    expect(container).toMatchSnapshot();
  });
  it('should render without fail', () => {
    const { getByText } = render(<SomethingWrong />);
    expect(getByText('SOMETHING_WRONG')).toBeTruthy();
    expect(getByText('GO_BACK')).toBeTruthy();
  });
});
