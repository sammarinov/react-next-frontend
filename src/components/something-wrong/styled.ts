import styled from 'styled-components';

export default styled.h1`
  font-weight: 800;
  color: #000;
  text-align: center;
  font-size: 2.5em;
  padding-top: 20px;

  @media screen and (max-width: 400px) {
    padding-left: 20px;
    padding-right: 20px;
    font-size: 2em;
  }
`;

export const StyledButtonWrapper = styled.div`
  height: 40px;
  width: 50%;
  margin: 0 auto 20px;
`;
