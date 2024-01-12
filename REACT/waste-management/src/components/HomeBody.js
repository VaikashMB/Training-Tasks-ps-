import React from 'react'
import { Link } from 'react-router-dom';

const HomeBody = () => {
    return (
        <div>
            <div className='homeimages'>

                <img src='https://us.123rf.com/450wm/inkdrop/inkdrop1812/inkdrop181200277/113030682-go-green-green-environmental-paper-background-with-wind-turbines-trees-and-people.jpg?ver=6' alt='img1' height={400} />
                <img src='https://static.vecteezy.com/system/resources/previews/022/448/284/non_2x/save-earth-day-poster-environment-day-nature-green-ai-generative-glossy-background-images-tree-and-water-free-photo.jpg' alt='img2' height={400} />
                <img src='https://kfmindia.in/wp-content/uploads/2021/05/Waste-Management-Market.jpg' alt='img2' height={400} />

            </div>

            <div >
            <h3 className='homequote'>"Transforming Trash into Treasure!"</h3>
            <button className='btn1'>
               <Link to="/Schedule" >GO GREEN</Link>
             </button>
            </div>
        </div>
    )
}

export default HomeBody