import './Products.scss';
import CardSection from './CardSection';

import {
  Container,
  Col,
  Row,
  ListGroup,
} from 'react-bootstrap';

const Products = () => {
  return (
    <div className="products my-5">
      <Container>
        <Row>
          <Col sm={3}>
            <h2>Brands</h2>
            <ListGroup>
              <ListGroup.Item>Vivamus</ListGroup.Item>
              <ListGroup.Item>Etiam</ListGroup.Item>
              <ListGroup.Item>Praesent</ListGroup.Item>
              <ListGroup.Item>Aenean</ListGroup.Item>
              <ListGroup.Item>Vestibulum</ListGroup.Item>
            </ListGroup>
          </Col>
          <Col sm={9}>
            <h2>New arrivals</h2>
            <div className="card-section d-flex flex-wrap gap-5">
              <CardSection url="/slider/9.jpeg"/>
              <CardSection url="/slider/8.jpeg"/>
              <CardSection url="/slider/7.jpeg"/>
              <CardSection url="/slider/6.jpeg"/>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Products