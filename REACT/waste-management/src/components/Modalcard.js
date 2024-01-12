import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { emailState , wasteState , timeState, addressState} from '../states/atom';
import { useRecoilValue } from 'recoil'

function Example() {

  const email = useRecoilValue(emailState)
  const waste = useRecoilValue(wasteState)
  const time = useRecoilValue(timeState)
  const address = useRecoilValue(addressState)

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Submit
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Confirmation</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Email: {email}</p>
          <p>Waste-type: {waste} </p>
          <p>Pick-up time: {time} </p>
          <p>Address: {address}</p>
          <p>Are you sure?</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Okay
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Example;