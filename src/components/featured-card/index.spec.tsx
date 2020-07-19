import * as React from 'react';

import { render } from '@Test/utils';
import FeaturedCard from '.';

describe('FeaturedCard', () => {
    it('should match snapshot', () => {
        const { container } = render(<FeaturedCard item={
            {
                "id": 11,
                "caption": "Mickey Mouse",
                "description": "Micke Mouse is a cartoon character and the mascot of The Walt Disney Company. He was created by Walt Disney and Ub Iwerks at the Walt Disney Studios in 1928. An anthropomorphic mouse who typically wears red shorts, large yellow shoes, and white gloves, Mickey is one of the world's most recognizable characters.",
                "picture": "mickey.png",
                "favorite": "68",
                "price": "99.99",
                "actions": ["ADD_TO_CART", "MORE_DETAILS"],
                "topFeatured": true
            }
        } />);

        expect(container).toMatchSnapshot();
    });
});
