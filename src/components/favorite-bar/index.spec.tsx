import * as React from 'react';

import { render } from '@Test/utils';
import { FavoriteBar } from '.';

describe('FavoriteBar', () => {
    it('should match snapshot', () => {
        const { container } = render(<FavoriteBar favorite={50} />);

        expect(container).toMatchSnapshot();
    });
});
