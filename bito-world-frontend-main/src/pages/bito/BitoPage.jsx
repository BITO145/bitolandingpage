import BitoDriving from './sections/BitoDriving.jsx';
import Objectives from './sections/Objectives.jsx';
import KeyActivities from './sections/KeyActivities.jsx';
import Benefits from './sections/Benefits.jsx';
import Challenges from './sections/Challenges.jsx';
import TransformationBanner from './sections/TransformationBanner.jsx';
import EventGallery from './sections/EventGallery.jsx';


const BitoPage = () => {

  return (
  <>
  
     <div className="bg-[url('../assets/bito/association.webp')] bg-cover bg-no-repeat bg-bottom py-[200px] -mt-[170px] max-[1000px]:bg-[url('../assets/member/bannerdesk.jpg')] max-[1000px]:bg-center max-[1000px]:pt-[100px] max-[1000px]:px-[30px] max-[1000px]:pb-[30px] max-[1000px]:-mt-[90px]">
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
