import React from 'react';
import Container from '../../container/Container';
import Button from '../Button/Button';
import './Splash.scss';

const Splash = () => {
  return (
    <section className="splash">
      <Container>
        <header>
          <div className="page-title">
          hello, <br/>
          we are <span>creatively.</span>
          </div>
          <div className="page-subtitle">
            we build brands and products to bring big ideas into life.
          </div>
          <Button color="white">see or work</Button>
        </header>
      </Container>
    </section>
  )
}

export default Splash