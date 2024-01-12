import React from 'react';
 
const ChildComponent = (props) => {
  return (
<div>
<img className='image' src={props.imageSource} alt="wallpaper" />
</div>
  );
};
 
export default ChildComponent;