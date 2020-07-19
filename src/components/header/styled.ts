import styled from 'styled-components';

export const StyledLogo = styled.img`
  height: 70px;
`;

export default styled.header`
  display: grid;
  align-items: center;
  background: ${({ theme }) => theme.colors.BLACK_27};
  color: ${({ theme }) => theme.colors.WHITE};
  height: 80px;
`;