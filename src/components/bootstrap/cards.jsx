import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
// import Loaders from '../loaders';
// import CustomToasts from "../toasts/toasts"
import CustomHeart from '../icons/heart';



function Cards({ index, removeCard }) {
  return (
    <Card style={{ width: '20rem', display: "flex" }}>
      <Card.Img variant="top" src="https://th.bing.com/th?id=OIP.HxV79tFMPfBAIo0BBF-sOgHaEy&w=310&h=200&c=8&rs=1&qlt=90&o=6&cb=13&dpr=1.4&pid=3.1&rm=2" />
      <Card.Body>
        <Card.Title>likhitha</Card.Title>
        <h1>chaithra</h1>
        <CustomHeart />
        <Button variant="primary" onClick={() => removeCard(index)}>Remove</Button>
      </Card.Body>
    </Card>
  );
}

export default Cards;