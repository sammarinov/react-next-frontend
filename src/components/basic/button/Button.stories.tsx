import React from 'react';
/* eslint-disable import/no-extraneous-dependencies */
import { boolean } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import { Button } from '.';

export default {
  component: Button,
  title: 'Button',
};

export const Buttons = () => (
  <div style={{ width: '80%', margin: '20px auto', padding: '20px', border: '1px solid' }}>
    <Button disabled={boolean('Disabled', false)} onClick={action('button-click')}>
      Button (with actions)
    </Button>
    <div style={{ height: '30px', marginTop: '20px' }}>
      <Button disabled>Button (disabled)</Button>
    </div>
    <div style={{ height: '30px', marginTop: '20px' }}>
      <Button bgColor="GREY_EF" textColor="BLACK_27" sharp inverted>
        Button (sharp)
      </Button>
    </div>
    <div style={{ height: '30px', marginTop: '20px' }}>
      <Button bgColor="RED" curved columns="0,50">
        <span>Button (curved)</span>
        <Button bgColor="WHITE" textColor="BLACK_27" padless curved>
          ---
        </Button>
      </Button>
    </div>

    <div style={{ height: '30px', marginTop: '20px' }}>
      <Button bgColor="BLACK_27" inverted curved>
        Button (curved inverted)
      </Button>
    </div>

    <div style={{ height: '30px', marginTop: '20px' }}>
      <Button bgColor="BLACK_27" inverted curved columns="0,50">
        <span>Button (curved inverted)</span>
        <Button bgColor="WHITE" textColor="BLACK_27" padless curved>
          ---
        </Button>
      </Button>
    </div>
  </div>
);
