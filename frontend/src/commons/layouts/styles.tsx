import styled from "styled-components";

export const Div = styled.div`
min-height: calc(100vh - 1000px);
@media screen and (max-width: 610px) {     
  min-height: calc(100vh - 200px);
}
`;

export const MainSection = styled.section`
  position: relative;
  max-width: 400px;
  margin: 0 auto;
`;

export const BaristaSection = styled.section`
  position: relative;
  margin: 0 auto;
`;
