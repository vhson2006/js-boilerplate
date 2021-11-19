import React, { useEffect } from 'react';
import BaristaFooter from '../footers/barista';
import { Container } from 'react-bootstrap';
import { Div, BaristaSection } from './styles';
import { useHistory } from 'react-router';

const BaristaLayout = (props: any) => {
  const { component } = props;
  const history = useHistory();
  const isAuthenticated = localStorage.getItem('token') ? true : false;
  
  useEffect(() => {
    if (isAuthenticated) {
      setTimeout(() => {
        history.push('/redeem');
      }, 200)
    }
  }, [])
  
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

export default BaristaLayout;
