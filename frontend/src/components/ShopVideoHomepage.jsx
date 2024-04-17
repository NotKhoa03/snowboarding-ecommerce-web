
import videoBg from '../assets/intro.mp4';


const ShopVideoHomepage = () => {
  return (
    <div>
       
      <video className='intro-vid' autoPlay loop muted>
        <source src={videoBg} type='video/mp4' />
      </video>
      <div className="video-text home">
        <h1 style={{ fontSize: '1.5em',  textShadow: '2px 2px #000000' }}><strong>Welcome to Shred Central</strong></h1>
        <p style={{ fontSize: '0.75em', textShadow: '2px 2px #000000' }}> The hub for shredders of looking to upgrade their gear and style. 
        </p>
      </div>
    </div>
  );
};

export default ShopVideoHomepage