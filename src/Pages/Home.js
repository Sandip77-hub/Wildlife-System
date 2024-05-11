// React Component
import React from 'react';
import './Home.css';
import Contact from './Contact';
import Card from './Card';
import Research from './Research';
import Team from './Team';

const Home = () => {
  

  return (
      <div className='home'>
        <div className='container'>
          <div>
            <h1 className='theme'>Manage all your <br />observation in one <br />place</h1>
            <p className='model'>Wildtrack AI model.</p>
          </div>
          <div>
            <img className='lion_image' src='./images/lion.jpg' alt="Lion" />
            <img className='Tiger-image' src='./images/Rhino.jpg ' alt='Tiger' />
            <img className='Rhion-image' src='./images/Tiger.webp' alt='Rhino' />
          </div>
        </div>

          <p className='manage_paragraph'>
            In nature, wildlife symbolizes beauty, resilience, and diversity. Protecting it is crucial due to habitat
            loss, climate change, and human encroachment. Wildlife recognition systems, utilizing AI and
            data analytics, aid in identifying species and monitoring biodiversity. They foster wonder and
            connection by revealing hidden wildlife behavior patterns. Embracing wildlife recognition is essential
            for conservation efforts. Together, let's safeguard biodiversity and create a brighter future.

          </p>


          <h3 className='feature'>SAVE,PRESERVE AND CONSERVE WILDLIFE.</h3>
          <p className='purpose'>
            WildTrack AI model make it easy to collect and manage your observation.
          </p>


          <>
          <Card/>
          </>



     


       
            <>
            <Research />
            </>
            <>
            <Team />
            </>
          </div>

        );
};

        export default Home;
