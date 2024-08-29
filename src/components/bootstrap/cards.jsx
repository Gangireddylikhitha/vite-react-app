import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Cards() {
  return (

    <Card style={{ width: '20rem' }}>
      <Card.Img variant="top" src="https://th.bing.com/th?id=OIP.HxV79tFMPfBAIo0BBF-sOgHaEy&w=310&h=200&c=8&rs=1&qlt=90&o=6&cb=13&dpr=1.4&pid=3.1&rm=2" />
      <Card.Body>
        <Card.Title>likhitha</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    
  );
}

export default Cards;