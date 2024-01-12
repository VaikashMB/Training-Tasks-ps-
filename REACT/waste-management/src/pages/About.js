import React from 'react'
import Header from '../components/Header'
import AboutBody from '../components/AboutBody'
import Footer from '../components/Footer'

const About = () => {
  return (
    <div>
        <Header/>
        <AboutBody/>
        <h3>ABOUT GO GREEN</h3>
        <p>Welcome to Go Green, an innovative waste management app dedicated to creating a cleaner and greener environment. Developed under the visionary leadership of Prime Minister Narendra Modi, Go Green is a part of the broader initiative to promote sustainable living and responsible waste disposal.</p>
      <h3>Our Mission</h3>
      <p>At Go Green, our mission is to empower individuals and communities to make environmentally conscious choices. We aim to reduce the ecological footprint by encouraging proper waste management practices, recycling, and fostering a culture of sustainability.</p>
        <Footer/>
        
    </div>
  )
}

export default About