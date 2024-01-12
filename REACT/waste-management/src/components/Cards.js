import Card from 'react-bootstrap/Card';

function BasicExample() {
    return (
        <div className='row'>
            <div className='col'>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="https://plus.unsplash.com/premium_photo-1664455687728-12db0b5a196a?q=80&w=1886&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                    <Card.Body>
                        <Card.Title>Roll-Off dumpster rentel</Card.Title>
                        <Card.Text>
                        A roll-off dumpster is a large, open-top waste container designed to be transported and emptied by specialized trucks.
                        </Card.Text>
                        
                    </Card.Body>
                </Card>
            </div>
            <div className='col'>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="https://images.unsplash.com/photo-1610141160723-d2d346e73766?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                    <Card.Body>
                        <Card.Title>Residential waste pickup</Card.Title>
                        <Card.Text>
                        These services typically involve scheduled pickups of garbage, recyclables, contributing to effective waste management practices.

                        </Card.Text>
                        
                    </Card.Body>
                </Card>
            </div>
            <div className='col'>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="https://images.unsplash.com/photo-1604609865013-7e00416561c3?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                    <Card.Body>
                        <Card.Title>Business waste pickup</Card.Title>
                        <Card.Text>
                        "Streamline your business waste management with our efficient waste pickup services.   
                        </Card.Text>
                        
                    </Card.Body>
                </Card>
            </div>
            
        </div>
    );
}

export default BasicExample;