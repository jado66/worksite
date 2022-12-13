import Container from '../components/utils/Container';
import ThreeProng from '../components/utils/ThreeProng';
import UnderConstructionPage from '../components/utils/UnderConstructionPage';
import { CodeSlash, Headset, GearWideConnected, Hammer, Bank } from 'react-bootstrap-icons';
import ThreeCard from '../components/utils/ThreeCard';
import { Wifi, Phone, Laptop, Pencil } from 'react-bootstrap-icons';
import Link from 'next/link';

export default function Index() {
  return (
    <UnderConstructionPage>
      <Container>
        <div className='mt-3'>
          {/* <ThreeProng
            title1 = "Software"
            title2 = "Engineering"
            title3 = "Consulting"
            subtitle1 = "We can build all sorts of software: Mobile, Web, Desktop:"            
            subtitle2 = ""
            subtitle3 = " With our experience and expertise and your vision we can create a great team."
            btnText3 = "Get Started"
            icon1 = {<CodeSlash/>}
            icon2 = {<GearWideConnected/>}
            icon3 = {<Headset/>}
          /> */}
          <h2 className='text-center mb-4'>Who are we?</h2>
          <div className='d-flex flex-row'>
            <div className='col-6 px-4'>
              <ul className='list-unstyled'>
                <li className='mb-3'>- We are a small team of highly specialized engineers.</li>
                <li className='mb-3'>- We provide complex Software and Engineering solutions.</li>
                <li className='mb-3'>- With backgrounds in Physics and Engineering we can create cross functional sytems of engineering.</li>
                <li>- Our capabilities range from simple websites to complex cross functional engineering systems.</li>
              </ul>
            </div>
            <div className='col-6 border border-theme bg-theme-inv rounded-3 opacity-50 d-flex justify-content-center' style={{minHeight:"200px"}}>
              <h5 className='text-theme-inv text-center my-auto'>Picture</h5>
            </div>
          </div>
          


          {/* <hr className="border-theme mb-4"/> */}

          <h2 className='text-center mb-4 mt-5'>Here are our solutions</h2>
          <ThreeCard
             title1 = "Software"
             title2 = "Engineering"
             title3 = "Consulting"
             body1 = {
             <ul className='text-start list-unstyled'>
              <li><Wifi/> <Link href="/apps/web">Web</Link> </li>
              <li><Phone/> <Link href="/apps/mobile"> Mobile</Link></li>
              <li><Laptop/> <Link href="/apps/desktop">Laptop</Link></li>
             </ul>
             }            
             body2 = {
              <ul className='text-start list-unstyled'>
               <li><Hammer/> <Link href="/apps/web"> 3D Modeling</Link> </li>
               <li><Pencil/> <Link href="/apps/mobile">Engineering Drawings</Link></li>
               <li><Bank/> <Link href="/apps/desktop">Patent Work</Link></li>
              </ul>
              }    
             body3 = {
              <ul className='text-start list-unstyled'>
               <li>Just need some guidence?</li>
               <li>We got you. </li>
               <li>Seriously</li>
              </ul>
              }    
             btnText3 = "Get Started"
             icon1 = {<CodeSlash/>}
             icon2 = {<GearWideConnected/>}
             icon3 = {<Headset/>}
          
          />
        </div>
     
      </Container>
    </UnderConstructionPage>
  );
}
