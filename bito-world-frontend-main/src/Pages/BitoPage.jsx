import BitoDriving from './Bito/BitoDriving';
import Objectives from './Bito/Objectives';
import KeyActivities from './Bito/KeyActivities';
import Benefits from './Bito/Benefits';
import Challenges from './Bito/Challenges';
import TransformationBanner from './Bito/TransformationBanner';
import EventGallery from './Bito/EventGallery';


const BitoPage = () => {

  return (
  <>
  
  <div className="h-100 association-img">
<div className='banner-content-membership member-container'>
   <div className='btn-center'>
   <h2 style={{ color: '#fff' }} className='text-left membership-heading'>Welcome to</h2>
      <h2 style={{ color: '#fff' }} className='pb-3 text-left membership-heading'>BITO Industries Association <br/>BIA</h2>
    
            <button className="px-4 py-2 btn btn-light mt-sm-5 border-button">
              BECOME A MEMBER <i className="fa fa-arrow-right" aria-hidden="true"></i>
            </button>
           
   </div>
</div>
</div>
  
  <BitoDriving/>
  <Objectives/>
  <KeyActivities/>
  <EventGallery/>
  <Benefits/>
  <Challenges/>
  <TransformationBanner/>
  </>
  );
}

export default BitoPage;
