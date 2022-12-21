import Container from "../../components/utils/Container";
import CallToAction from "../../components/pageComponents/CallToAction";
import BlackholeChat from "../../components/techDemos/AiChats/BlackholeChat";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import AlgebraChat from "../../components/techDemos/AiChats/AlgebraChat";


export default function BlockchainAndCrypto() {
        
    return (
    <Container>
      <h1 className="text-center h3 mt-4 mb-4">Artificial Intelligence &amp; Machine Learning</h1>
      
      <div className="d-flex row px-4">
        <div className="col">
          <p className="pe-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus est sem, pretium vel lacinia sit amet, laoreet iaculis lorem. Fusce laoreet ullamcorper urna, rhoncus condimentum diam venenatis vel. Sed hendrerit neque sit amet ipsum condimentum, vel laoreet erat fringilla. Vivamus laoreet mattis nunc, at laoreet justo varius id. Donec luctus maximus feugiat. Phasellus ligula urna, pharetra vel nibh ac, iaculis elementum dolor. Vivamus sollicitudin libero sapien, ut lacinia enim suscipit quis. Etiam in convallis libero. In condimentum velit et elit eleifend pulvinar. Nunc massa ipsum, efficitur auctor augue vel, maximus ultrices dui. In pellentesque mauris id nisl vestibulum, et accumsan metus aliquet. Fusce consectetur dapibus quam, eu gravida est mollis vel. Duis tempor, est nec condimentum malesuada, mi orci iaculis augue, a ultricies ligula arcu a nisl. Vestibulum euismod dictum ante vitae semper. Integer malesuada convallis quam sed blandit. Proin egestas augue et lectus tincidunt tincidunt.
          </p>
        </div>
        <div className='col-sm-6 col-12 bg-a3 rounded-3 d-flex justify-content-center' style={{minHeight:"200px"}}>
          <h5 className='text-theme-inv text-center my-auto'>Picture</h5>
        </div>
      </div>      

      <hr className="bg-brand opacity-100 my-4"/>

      <h1 className="text-center h3 ">Text AI</h1>
        
        <Carousel
            showStatus = {false}
            autoPlay = {false}
            useKeyboardArrows = {false}
            showThumbs = {false}
            infiniteLoop = {false}
            // dynamicHeight={true}
        >
            <div key="slide1" className="pt-4 mt-4">
                <AlgebraChat/>
            </div>
            <div key="slide2" className="pt-4 mt-4">
                <BlackholeChat/>
            </div>
        </Carousel>
          
        
        {/* <BlackholeChat/> */}
      
      <hr className="bg-brand opacity-100 my-4"/>

       <CallToAction/>
    </Container>
  )
}