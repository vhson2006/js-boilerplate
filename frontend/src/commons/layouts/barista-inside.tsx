import React, { useEffect } from 'react';
import BaristaFooter from '../footers/barista';
import { Container } from 'react-bootstrap';
import { Div, BaristaSection } from './styles';
import { useHistory } from 'react-router';

const BaristaInsideLayout = (props: any) => {
  const { component } = props;
  const history = useHistory();
  
  useEffect(() => {
    const isAuthenticated = localStorage.getItem('token') ? true : false;
    if (isAuthenticated === false ) {
      setTimeout(() => {
        history.push('/');
      }, 200);
    }
  }, []);
  
  return (
    <Container>
      <Div>
        {component}
      </Div>
      <BaristaSection>
        <BaristaFooter />
      </BaristaSection>
    </Container>
  )
}

export default BaristaInsideLayout;
