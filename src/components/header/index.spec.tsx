import * as React from 'react';

import { render } from '@Test/utils';
import Header from '.';

describe('Header', () => {
  it('should match snapshot', () => {
    const { container } = render(<Header>Test</Header>);

    expect(container).toMatchSnapshot();
  });
});
