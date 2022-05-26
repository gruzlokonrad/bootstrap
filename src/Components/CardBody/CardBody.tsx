import { Button, Col, Container, Row } from 'react-bootstrap';
import './CardBody.scss';

const CardBody = () => {
  return (
    <div className="card-body">
      <Container fluid className="py-5 text-light text-capitalize text-center">
        <Row>
          <Col md={6} className="g-4 position-relative d-flex justify-content-center align-items-center">
            <img src="/slider/8.jpeg" alt=""  />
            <div className="position-absolute d-flex flex-column justify-content-between align-items-center">
              <h1>Winter Sale</h1>
              <Button className="mt-4">See deals</Button>
            </div>
          </Col>
          <Col md={6} className="g-4 position-relative d-flex justify-content-center align-items-center">
            <img src="/slider/9.jpeg" alt="" />
            <div className="position-absolute d-flex flex-column justify-content-between align-items-center">
              <h1>Lookbook</h1>
              <Button className="mt-4">Get inspired</Button>
            </div>
          </Col>
        </Row>
        <Row>
          <Col xs={12} className="g-4 position-relative d-flex justify-content-center align-items-center">
            <img src="/slider/10.jpeg" alt="" />
            <div className="position-absolute d-flex flex-column justify-content-between align-items-center">
              <h1>News and ideas</h1>
              <Button className="mt-4">Go to Harbinger blog</Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default CardBody