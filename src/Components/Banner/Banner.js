import React from 'react';
import icon1 from '../../img/icon1.png';
import icon2 from '../../img/icon2.png';
import icon3 from '../../img/icon3.png';
import photo from '../../img/photo.png';
import SocialMedia from '../SocialMedia/SocialMedia';
import bg from '../../img/background.jpg';
import './Banner.css';

export default function Banner() {

    const banner_bg = {
        backgroundImage: `url(${bg})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover'
    }

  return (
    <div id='banner' style={banner_bg}>
        <div className='banner-left'>
        <h4>we are the creative</h4>
            <h2>Marketing <br /> agency</h2>
            <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis labore corrupti doloremque, delectus repellendus neque iusto tenetur.
            </p>

            <button>See more</button>

            <div className='banner-icon'>
                <div>
                <img src={icon1} alt='Icon' />
                </div>
                <div>
                <img src={icon2} alt='Icon' />
                </div>
                <div>
                <img src={icon3} alt='Icon' />
                </div>
            </div>
            <div className='middle-text'>
            <h4>Supercharge <br/> Your Business <br/> with Us!</h4>
        </div>
        </div>
        <div className='banner-right'>
            <div className='photo'>
                <img src={photo} alt='Photo'/>
            </div>
            <div className='sidebar-icon'>
                <SocialMedia />
            </div>
        </div>
    </div>
  )
}
