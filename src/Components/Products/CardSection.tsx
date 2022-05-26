import {
  Card,
  Button
} from 'react-bootstrap';


const CardSection = ({url}:any) => {
  return (
    <div>
      <Card style={{ width: '18rem' }}>
      {/* <Card className="col-sm-6"> */}
        <Card.Img variant="top" src={url ? url : "/slider/10.jpeg"} />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>
  )
}

export default CardSection