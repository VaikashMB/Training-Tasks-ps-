
import Form from 'react-bootstrap/Form';
import { useRecoilState } from 'recoil';
import { addressState, emailState, timeState, wasteState } from '../states/atom';
import Modalcard from "../components/Modalcard"
import Header from '../components/Header';
import Footer from '../components/Footer';

function Schedule() {
  const [email,setEmail] = useRecoilState(emailState)
  const [waste,setWaste] = useRecoilState(wasteState)
  const [time,setTime] = useRecoilState(timeState)
  const [address,setAddress] = useRecoilState(addressState)

  return (
    <div>
      <Header/>
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" value={email} onChange={event => setEmail(event.target.value)}/>
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>WasteType</Form.Label>
        <Form.Control type="text" placeholder="Enter type of waste" value={waste} onChange={event => setWaste(event.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Pickup Time</Form.Label>
        <Form.Control type="text" placeholder="Enter pickup time" value={time} onChange={event => setTime(event.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Address</Form.Label>
        <Form.Control type="text" placeholder="Enter address" value={address} onChange={event => setAddress(event.target.value)} />
      </Form.Group>
      
      <Modalcard/>
    </Form>
    <Footer/>
    </div>
  );
}

export default Schedule;