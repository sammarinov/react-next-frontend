import * as React from 'react';

import { render } from '@Test/utils';
import ArticleCard from '.';

describe('ArticleCard', () => {
    it('should match snapshot', () => {
        const { container } = render(<ArticleCard item={
            {
                "id": 1,
                "caption": "About Mickey Mouse",
                "description": "Micke Mouse is a cartoon character and the mascot of The Walt Disney Company. He was created by Walt Disney and Ub Iwerks at the Walt Disney Studios in 1928. An anthropomorphic mouse who typically wears red shorts, large yellow shoes, and white gloves, Mickey is one of the world's most recognizable characters.",
                "picture": "mickey.png",
                "created": "1984-08-05T08:15:30-05:00",
                "author": "Jummy"
            }
        } />);

        expect(container).toMatchSnapshot();
    });
});
