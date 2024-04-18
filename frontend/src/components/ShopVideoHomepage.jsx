
import videoBg from '../assets/intro.mp4';


const ShopVideoHomepage = () => {
  return (
    <div>
       
      <video className='intro-vid' autoPlay loop muted>
        <source src={videoBg} type='video/mp4' />
      </video>
      <div className="video-text home">
        <h1 style={{ fontSize: '2.5em'}}><strong>Gear Up, <span style={{color: '#76a1e2'}}> Shred </span> Hard</strong></h1>
        <p style={{ fontSize: '0.75em', paddingLeft: '50px' }}> Your one-stop shop for premium snowboards, gear, and apparel. 
        </p>
      </div>
    </div>
  );
};

export default ShopVideoHomepage