import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import Form from 'react-bootstrap/Form';
import {useRecoilState, atom} from "recoil"
import { useNavigate } from "react-router-dom";

const usernameState = atom({
  key: 'username',
  default: ''
})

const passwordState = atom({
  key: 'password',
  default: ''
})

const emailState = atom({
  key: 'email',
  default: ''
})

const Login = ({ authenticate }) => {

  const [username, setUsername] = useRecoilState(usernameState)

  const [password, setPassword] = useRecoilState(passwordState)

  const [email, setEmail] = useRecoilState(emailState)


  const navigate = useNavigate();
  const onClick = () => {
    authenticate();
    navigate("/");
  };

  return (
    <div>
    <Header />
    <div className='login-container'>
      
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Username</Form.Label>
          <Form.Control type="text" placeholder="Enter username"  value={username} onChange={event => setUsername(event.target.value)}/>
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter email"  value={email} onChange={event => setEmail(event.target.value)}/>
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" value={password} onChange={event => setPassword(event.target.value)} />
        </Form.Group>
        
      <button className='loginbtn' onClick={onClick}>Log In</button>
      </Form>


      
    </div>
    <Footer />
    </div>
  );
};

export default Login;