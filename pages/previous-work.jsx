import Image from "next/image";
import Link from "next/link";
import EmailUs from "../components/mail/EmailUs";
import CallToAction from "../components/pageComponents/CallToAction";
import Container from "../components/utils/Container";
export default function Consulting() {
  return (
    <Container>
        <h1 className="text-center h3 mt-3 mb-3">Web Development</h1>

        <div className="px-4 mb-5">

        <div className="d-flex row px-4">
            <div className='col-md-6 mb-lg-0 mb-3 rounded-3 d-flex justify-content-center' style={{minHeight:"200px", backgroundColor:"#FFFFFF"}}>
                <a target="_blank" href="https://cabinetssouthwest.com/" className="d-flex flex-grow-1 no-hover">
                    <div className="m-5 position-relative flex-grow-1">
                        <Image
                            src={'/cabinetslogo.jpg'}
                            alt="logo"
                            objectFit={'contain'}
                            fill = {"responsive"}
                        /> 
                    </div>
                </a>
            </div>
        <div className="col">
            <p className="px-3">
                Cabinets Southwest is a small business based out of Central Utah. They sell cabinets to professional contractors. Their single page website was created in under a month and came with several features: 
            </p>
            <ul  className="px-5">
                <li>PDF viewers and document downloading capablity</li>
                <li>Automated emails with from a quote request form with the ability to add image attachments</li>
                <li>An admin portal to view website analytics like traffic and interactions.</li>
            </ul>
            <p  className="px-3">Check out their website to see what your we could do for your small business.</p>
        </div>
        </div>

        <hr className="bg-brand opacity-100 my-4"/>

        <h1 className="text-center h3 mb-4">Larger Companies</h1>

        <div className="d-flex row px-4">
        <div className="col">
            <p className="pe-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus est sem, pretium vel lacinia sit amet, laoreet iaculis lorem. 

            </p>
        </div>
        <div className='col-6 rounded-3 d-flex justify-content-center bg-a3' style={{minHeight:"200px", backgroundColor:"#FFFFFF"}}>
            <a target="_blank" href="https://sinch.com/" className="d-flex flex-grow-1 no-hover">
                    <div className="m-5 position-relative flex-grow-1">
                        <Image
                            src={'/sinchlogo.png'}
                            alt="logo"
                            objectFit={'contain'}
                            fill = {"responsive"}
                        /> 
                    </div>
                </a>
        </div>
        </div>
        <hr className="bg-brand opacity-100 my-4"/>


       

        <CallToAction/>
      </div>
    </Container>        
  );
}
