import React, { useState } from 'react';
import ChildComponent from './ChildComponent';

const ParentComponent = () => {
    const [imageSource, setImageSource] = useState('https://images.pexels.com/photos/443446/pexels-photo-443446.jpeg?auto=compress&cs=tinysrgb&w=1600');

    const handleButtonClick = () => {
        // Assuming you have a mechanism to fetch or set a new image source
        const newImageSource = 'https://images.pexels.com/photos/36717/amazing-animal-beautiful-beautifull.jpg?auto=compress&cs=tinysrgb&w=1600';
        setImageSource(newImageSource);
    };

    return (
        <div className='body'>
            
            <ChildComponent imageSource={imageSource} />
            <button className='button' onClick={handleButtonClick}>Change Wallpaper</button>
        </div>
    );
};

export default ParentComponent;