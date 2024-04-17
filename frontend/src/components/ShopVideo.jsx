
import videoBg from '../assets/snowboardbg.mp4';
import { useParams } from 'react-router-dom';

const ShopVideo = () => {

  const { category } = useParams();



  return (
    <div>
      <video className='intro-vid' autoPlay loop muted>
        <source src={videoBg} type='video/mp4' />
      </video>
      <div className="video-text">
        <h5>{category.toUpperCase()}</h5>
        <h1 style={{ fontSize: '1.5em' }}><strong>Expand Your Quiver</strong></h1>
        <p style={{ fontSize: '0.5em' }}> Elevate your style and performance. <br/> Premium snowboard gear, unbeatable prices.
        </p>
      </div>
    </div>
  );
};

export default ShopVideo