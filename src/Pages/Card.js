import React from 'react'
import './Card.css';

const card = () => {
  return (
    <div className='card-container'>
      <div className='card'>
        <img className='card-img' src='./images/snow_leopard.webp' alt='snow-leopard' />
        <div className='card-body'>
          <h1 className='card-title'>Snow Leopard</h1>
          <p className='card-info'>The snow leopard (Panthera uncia), also known as the ounce, is a majestic big cat native to the mountainous regions of Central and South Asia, including the Himalayas, the Tibetan Plateau, and the Altai Mountains.</p>
        </div>
      </div>
      <div className='card'>
        <img className='card-img' src='./images/monal.webp' alt='Monal' />
        <div className='card-body'>
          <h1 className='card-title'>Himalayan Monal</h1>
          <p className='card-info'>The Himalayan Monal, Nepal's national bird, is a stunningly beautiful pheasant species found in the high-altitude regions of the Himalayas, including Nepal.</p>
        </div>

      </div>
      <div className='card'>
        <img className='card-img' src='./images/Spiny_Babbler.webp' alt='spiny_babbler' />
        <div className='card-body'>
          <h1 className='card-title'>Spiny Babbler</h1>
          <p className='card-info'>
            The Spiny Babbler, endemic to Nepal, boasts a distinct appearance with a spiky crest. Found in the mid-hills, its melodic calls resonate through dense forests, holding cultural significance and facing threats from habitat loss. Conservation efforts are crucial to safeguarding this symbol of Nepalese resilience.</p>
        </div>
      </div>

    </div>
  )
}

export default card