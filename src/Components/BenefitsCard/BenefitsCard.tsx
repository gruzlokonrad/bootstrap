import { Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { FaBeer, FaMoneyBillWave } from 'react-icons/fa';
import { TbTruckDelivery } from 'react-icons/tb';
import { MdOutlineSupport } from 'react-icons/md';

const BenefitsCard = () => {
  return (
    <Container fluid className="p-5 text-capitalize d-flex flex-wrap justify-content-around">
      <Card className="mb-5" style={{ width: '16rem' }} >
        <Card.Body className="d-flex justify-content-around py-4">
          <TbTruckDelivery className="my-1" />
          <div className="text-muted">
            <Card.Title>
              Free shipping
            </Card.Title>
            <Card.Subtitle className="py-1">
              Some quick example
            </Card.Subtitle>
          </div>
        </Card.Body>
      </Card>
      <Card className="mb-5" style={{ width: '16rem' }}>
        <Card.Body className="d-flex justify-content-around py-4">
          <FaMoneyBillWave className="my-1"/>
          <div className="text-muted">
            <Card.Title>
              60-day refund
            </Card.Title>
            <Card.Subtitle className="py-1">
              Some quick example
            </Card.Subtitle>
          </div>
        </Card.Body>
      </Card>
      <Card className="mb-5" style={{ width: '16rem' }}>
        <Card.Body className="d-flex justify-content-around py-4">
          <MdOutlineSupport className="my-1"/>
          <div className="text-muted">
            <Card.Title>
              24/7 support
            </Card.Title>
            <Card.Subtitle className="py-1">
              Some quick example
            </Card.Subtitle>
          </div>
        </Card.Body>
      </Card>
    </Container>
  )
}

export default BenefitsCard