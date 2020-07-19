import * as React from 'react';

import { render } from '@Test/utils';
import Footer from '.';

describe('Footer', () => {
  it('should match snapshot', () => {
    const { container } = render(<Footer />, {
      initialState: {
        app: {
          name: '',
          social: {
            "caption": "WE_ARE_SOCIAL",
            "description": "SOCIAL_MEDIA_DESCRIPTION",
            "media": [{
              "title": "facebook",
              "hideTitle": true,
              "href": "www.facebook.com",
              "icon": {
                "position": "start",
                "name": "facebook"
              }
            }, {
              "title": "twitter",
              "hideTitle": true,
              "href": "www.twitter.com",
              "icon": {
                "position": "start",
                "name": "twitter"
              }
            }, {
              "title": "instagram",
              "hideTitle": true,
              "href": "www.instagram.com",
              "icon": {
                "position": "start",
                "name": "instagram"
              }
            }, {
              "title": "youtube",
              "hideTitle": true,
              "href": "www.youtube.com",
              "icon": {
                "position": "start",
                "name": "youtube"
              }
            }]
          }
        }
      }
    });

    expect(container).toMatchSnapshot();
  });
});
