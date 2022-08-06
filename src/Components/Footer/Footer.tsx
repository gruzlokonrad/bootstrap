import { Button, Card, Form } from 'react-bootstrap'
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'

const Footer = () => {
  return (
    <>
      <footer className="p-5 d-flex flex-wrap justify-content-around" style={{ backgroundColor: '#eff2f5' }}>
        <Card className="mb-3 order-md-2" style={{ width: '16rem', backgroundColor: 'inherit', border: 'none' }}>
          <Card.Body className="d-flex justify-content-around py-4">
            <div className="text-muted">
              <Card.Title className="text-uppercase">
                Harbinger
              </Card.Title>
              <Card.Subtitle className="py-1">
                Vestibulum varius neque non
                posuere dapibus.
              </Card.Subtitle>
              <div className="d-flex justify-content-between w-50 pt-3">
                <FaFacebookF />
                <FaInstagram />
                <FaTwitter />
                <FaYoutube />
              </div>
            </div>
          </Card.Body>
        </Card>
        <Card className="mb-3 order-md-3" style={{ width: '16rem', backgroundColor: 'inherit', border: 'none' }}>
          <Card.Body className="d-flex justify-content-around py-4">
            <div className="text-muted">
              <Card.Title>
                Contact Us
              </Card.Title>
              <Card.Subtitle className="py-1">
                2795 Cunningham Court
                Rochester Hills 48306 Michigan
              </Card.Subtitle>
              <a href="#" className="text-decoration-none">support@company.com</a>
            </div>
          </Card.Body>
        </Card>
        <Card className="mb-3 order-md-1" style={{ width: '16rem', backgroundColor: 'inherit', border: 'none' }}>
          <Card.Body className="d-flex justify-content-around py-4">
            <div className="text-muted">
              <Card.Title>
                Newsletter
              </Card.Title>
              <Card.Subtitle className="py-1">
                lorem ipsum dolor sit amet
              </Card.Subtitle>
              <Form.Group className="mt-3 mb-2" controlId="exampleForm.ControlInput1">
                <Form.Control type="email" placeholder="name@example.com" />
              </Form.Group>
              <Card.Subtitle className="mb-3 px-1" style={{ fontSize: '10px' }}>
                We'll never share your email with anyone else.
              </Card.Subtitle>
              <Button variant="primary">Submit</Button>
            </div>
          </Card.Body>
        </Card>
      </footer>
      <div className="d-md-flex justify-content-around py-3" style={{backgroundColor: '#D0DBE1'}}>
        <div className="text-center mb-3 my-md-auto">
          ⒸHarbinger Ltd.
        </div>
        <ul className="my-auto">
          <li className="list-unstyled d-md-inline-block p-2">
            <a href="#" className="text-decoration-none text-secondary">
              About
            </a>
          </li>
          <li className="list-unstyled d-md-inline-block p-2">
            <a href="#" className="text-decoration-none text-secondary">
              Delivery
            </a>
          </li>
          <li className="list-unstyled d-md-inline-block p-2">
            <a href="#" className="text-decoration-none text-secondary">
              Returns
            </a>
          </li>
          <li className="list-unstyled d-md-inline-block p-2">
            <a href="#" className="text-decoration-none text-secondary">
              Privacy policy Terms and conditions
            </a>
          </li>
        </ul>
      </div>
    </>
  )
}

export default Footer