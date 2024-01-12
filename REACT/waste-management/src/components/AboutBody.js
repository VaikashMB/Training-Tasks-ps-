import Carousel from 'react-bootstrap/Carousel';

function AboutBody() {
  return (
    
    <Carousel>
      <Carousel.Item>
        <img src='https://greenbankwastesolutions.com/wp-content/uploads/Recycling-banner-.jpeg' className='carouselimage' alt='carousel1'></img>
        
      </Carousel.Item>
      <Carousel.Item>
      <img src='https://info.ehl.edu/hubfs/Blog-EHL-Insights/Blog-Header-EHL-Insights/AdobeStock_264542845.jpeg' className='carouselimage' alt='carousel2'></img>
        
      </Carousel.Item>
      <Carousel.Item>
      <img src='https://evreka.co/wp-content/uploads/2021/04/49577-min-scaled.jpg' className='carouselimage' alt='carousel3'></img>
        
      </Carousel.Item>
    </Carousel>
    
    
  );
}

export default AboutBody;
