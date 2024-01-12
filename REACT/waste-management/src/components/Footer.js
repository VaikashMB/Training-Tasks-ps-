import React from 'react';
import { MDBFooter, } from 'mdb-react-ui-kit';
import 'bootstrap/dist/css/bootstrap.min.css';

function Footer() {
  return (
    <MDBFooter className='text-center text-black fixed-bottom' style={{ backgroundColor: 'darkgreen' }}>
      {/* <MDBContainer className='p-4'></MDBContainer> */}

      <div className='text-center p-3' style={{ backgroundColor: 'darkgreen' }}>
        © 2023 Copyright:<br/>
        <a className='text-white' href='https://gogreen.com/'>
          GOgreen.com
        </a>
      </div>
    </MDBFooter>
  );
}
export default Footer;