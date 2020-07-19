import React from 'react';
import styled from 'styled-components';

import { IButton } from './button';

export const Button: React.FunctionComponent<IButton.IProps> = props => {
  return <StyledButton {...props} />;
};

const StyledButton = styled.button<IButton.IProps>`
  width: 100%;
  height: 100%;
  min-width: ${({ theme }) => theme.rem(20)};
  min-height: ${({ theme }) => theme.rem(20)};
  border: 1px solid transparent;
  outline: none;
  &:focus {
    outline: none;
  }
  display: grid;
  align-items: center;
  padding: ${({ theme, padless }) => (padless ? 0 : theme.rem(5))};
  grid-template-columns: ${({ theme, columns }) =>
    columns
      ?.split(',')
      .map(val => {
        const num = Number(val);
        if (num === 0) return 'auto';
        if (num === 1) return '1fr';
        return theme.rem(Number(val));
      })
      .join(' ') || '1fr'};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  border-radius: ${({ theme, curved, sharp }) => (!sharp ? theme.rem(curved ? 15 : 5) : 0)};
  background-color: ${({ theme, inverted, bgColor }) =>
    inverted ? theme.colors.WHITE : theme.colors[bgColor || 'PRIMARY']};
  border-color: ${({ theme, inverted, bgColor }) =>
    inverted ? theme.colors[bgColor || 'PRIMARY'] : 'transparent'};
  color: ${({ theme, inverted, bgColor, textColor }) => {
    if (textColor) {
      return theme.colors[textColor];
    }
    if (inverted) {
      return theme.colors[bgColor || 'PRIMARY'];
    }
    return theme.colors.WHITE;
  }};
  ${({ uppercase, leftAligned }) => ({
    ...(uppercase ? { 'text-transform': 'uppercase' } : {}),
    ...(leftAligned ? { 'text-align': 'left' } : {}),
  })}
`;
