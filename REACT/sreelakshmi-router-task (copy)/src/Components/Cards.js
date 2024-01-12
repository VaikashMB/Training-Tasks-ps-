import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import 'bootstrap/dist/css/bootstrap.min.css';

function Cards() {
    return (
        <div className='row'>
            
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="https://plus.unsplash.com/premium_photo-1661544694664-f281ae4b06a0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fGh1bWFuJTIwcmVzb3VyY2VzfGVufDB8fDB8fHww" />
                <Card.Body>
                    <Card.Title>HR manager</Card.Title>
                    <Card.Text>
                    In search of an adept HR Manager with a proven track record in navigating the dynamic landscape of human resources.
                    </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroup.Item>10 years experience</ListGroup.Item>
                    <ListGroup.Item>12 LPA</ListGroup.Item>
                </ListGroup>
                
            </Card>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="https://images.unsplash.com/photo-1509475826633-fed577a2c71b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c29mdHdhcmUlMjBhcmNoaXRlY3R1cmV8ZW58MHx8MHx8fDA%3D" />
                <Card.Body>
                    <Card.Title>Software Architect</Card.Title>
                    <Card.Text>
                    A skilled software architect is essential for designing and structuring complex software systems, ensuring they meet both functional and performance requirements
                    </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroup.Item>5 years experience</ListGroup.Item>
                    <ListGroup.Item>9.5 LPA</ListGroup.Item>
                   
                </ListGroup>
                
            </Card>
            </div>
        

    );
}


export default Cards;