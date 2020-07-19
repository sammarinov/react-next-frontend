import * as React from 'react';

import { render, fireEvent } from '@Test/utils';
import { theme } from '@Definitions/styled/theme';
import { Button } from '.';

describe('Basic Components', () => {
  describe('Button', () => {
    it('should have the passed class', () => {
      const { container } = render(<Button className="active" />);

      expect(container.firstChild).toHaveClass('active');
    });

    it('should render with children prop', () => {
      const { getByText } = render(
        <Button bgColor="WHITE" textColor="BLACK_27" padless curved>
          hey
        </Button>,
      );

      expect(getByText('hey')).toBeTruthy();
    });

    it('should render with children prop inverted', () => {
      const { getByText } = render(
        <Button bgColor="WHITE" textColor="BLACK_27" padless curved inverted>
          hey
        </Button>,
      );

      expect(getByText('hey')).toBeTruthy();
    });

    it('should render with multiple children', () => {
      const { getByText } = render(
        <Button bgColor="RED" curved columns="0,50" inverted>
          <span>hey</span>
          <span>hellow</span>
        </Button>,
      );

      expect(getByText('hey')).toBeTruthy();
      expect(getByText('hellow')).toBeTruthy();
    });

    it('should increment number on click', () => {
      let number = 1;
      const { getByText } = render(
        <Button
          uppercase
          leftAligned
          inverted
          onClick={() => {
            number += 1;
          }}
        >
          Button
        </Button>,
      );

      fireEvent.click(getByText('Button'), new MouseEvent('click'));

      expect(number).toBe(2);
    });

    it('should match snapshot', () => {
      const { container } = render(<Button>Test</Button>);

      expect(container).toMatchSnapshot();
    });

    it('should be disabled', () => {
      const { container } = render(
        <Button disabled sharp bgColor="RED" columns="0,1">
          Test
        </Button>,
      );

      expect(container.firstChild).toHaveStyleRule('cursor', 'not-allowed');
    });

    it('should be enabled', () => {
      const { container } = render(<Button disabled={false}>Test</Button>);

      expect(container.firstChild).toHaveStyleRule('cursor', 'pointer');
    });

    it('should have PRIMARY color', () => {
      const { container } = render(<Button>Test</Button>);

      expect(container.firstChild).toHaveStyleRule('color', theme.colors.WHITE);
    });
  });
});
