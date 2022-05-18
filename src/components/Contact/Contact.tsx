import React from 'react';
import Container from '../../container/Container';
import Button from '../Button/Button';
import './Contact.scss';

const Contact = () => {
  return (
    <section className="contact-container">
      <Container>
        <div className="page-title">
          contact us
        </div>
        <div className="contact">
          <form action="">
            <input type="text" placeholder="Your name" />
            <input type="email" placeholder="Your email" />
            <input type="text" placeholder="Subject" />
            {/* <input type="text" placeholder="Type your mesage here"/>     */}
            <textarea placeholder="Type your mesage here" />
            <Button color="white">submit</Button>
          </form>
          <div className="contact-details">
            <div className="name">
              <p className="title">sales specialists</p>
              <p>Elinor Kinder</p>
            </div>
            <div className="address">
              <p className="title">address</p>
              <p>299 Browning Lane</p>
              <p>Cortland</p>
              <p>13845</p>
            </div>
              <p className="title">phone</p>
              <p>607-835-7016</p>
            <div className="phone">

            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Contact