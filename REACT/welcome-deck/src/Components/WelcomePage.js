import React from 'react';

const WelcomePage = () => {
  return (
    <div className='body'>
      <div className='row row0'>
        <div className='col'>
          <div className='heading'> </div>
          <img  className='candidate' src="https://media.istockphoto.com/id/1426587191/photo/confident-happy-and-smiling-business-woman-standing-with-her-arms-crossed-while-in-an-office.webp?b=1&s=170667a&w=0&k=20&c=29r6Gw9EnUVw0i740CxDgkcXhCkt-sFWmckw2fGgsn4=" alt="NEW JOINEE 1" />
          <h3>Sreelakshmi Padmakumar</h3>
          <h3>Employee Id</h3>
        </div>
      </div>

      <div className='row row1'>
        <div className='col'>
          <div className='heading'> </div>
          <h2>Hometown</h2>
          <p>City, Country</p>
        </div>

        <div className='col'>
          <div className='heading'> </div>
          <h2>Qualification</h2>
          <p>Your Qualification</p>
        </div>

        <div className='col'>
          <div className='heading'> </div>
          <h2>Experience</h2>
          <p>Number of years of experience</p>
        </div>
      </div>

      <div className='row row2'>
        <div className='col'>
          <div className='heading'> </div>
          <h2>Core skills</h2>
          <p>Your core powers</p>
        </div>

        <div className='col'>
          <div className='heading'> </div>
          <h2>IBU</h2>
          <p>Business Unit</p>
        </div>

        <div className='col'>
          <div className='heading'> </div>
          <h2>Manager</h2>
          <p>Your Manager</p>
        </div>
      </div>

      <div className='row row3'>
        <div className='col'>
          <div className='heading'> </div>
          <h2>You can reach me @</h2>
          <p>Your Contact Information</p>
        </div>

        <div className='col'>
          <div className='heading'> </div>
          <h2>Quote that fuels me</h2>
          <p>Inspiration quote</p>
        </div>

        <div className='col'>
          <div className='heading'> </div>
          <h2>Hobbies</h2>
          <p>Your Hobbies</p>
        </div>
      </div>
    </div>
  );
}

export default WelcomePage;
