import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import {usernameState} from "../states/atom"
import Header from '../components/Header';
import Footer from '../components/Footer';

function Login({authenticate}) {

    const [username, setUsername] = useRecoilState(usernameState)

    const navigate = useNavigate();
    const onClick = () => {
        authenticate();
        navigate("/");
        
    }
  return (
    
     <div>
      <Header/>
      <h1>LOGIN HERE TO CONTINUE!</h1>


    <Form className='login'>
      <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Username</Form.Label>
        <Form.Control type="text" placeholder="Enter username" value={username} onChange={event => setUsername(event.target.value)} />
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button className='logbtn' type="submit" onClick={onClick}>
        Submit
      </Button>
    </Form>
    <Footer/>
    </div>
  );
}

export default Login;