import React from 'react';
import { Container } from 'react-bootstrap';
import MainFooter from '../footers/main';
import { Div, MainSection } from './styles';

const MainLayout = (props: any) => {
  const { component } = props;
  
  return (
    <Container>
      <Div>
        <MainSection className="my-5">
          {component}
        </MainSection>
      </Div>
      <MainSection>
        <MainFooter />
      </MainSection>
    </Container>
  )
}

export default MainLayout;
