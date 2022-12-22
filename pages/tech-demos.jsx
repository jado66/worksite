import Container from '../components/utils/Container';
import CallToAction from '../components/pageComponents/CallToAction';
import ReactFlowDemo from '../components/techDemos/FlowBuilder/ReactFlow';
import GraphDemo from '../components/techDemos/Cytoscape/GraphDemo';
import { Carousel } from "react-responsive-carousel";
import AlgebraChat from '../components/techDemos/AiChats/AlgebraChat';
import BlackholeChat from '../components/techDemos/AiChats/BlackholeChat';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { useState } from 'react';

export default function Index() {
 
  const [resetCounter, setResetCounter] = useState(0)

  return (
    <Container>
      <div className='mt-3'>
      
        <h1 className="text-center h3 mt-4 mb-4">Technical Demos</h1>

        <hr className="bg-brand opacity-100 my-4"/>

        < div className="d-flex row px-lg-4 gx-0">
        
          <div className="col">
              <h3 className="text-center pt-lg-0">Flow Builder</h3>
              <p className="px-3">
              This flow builder is an application for building node-based graphs. You can easily implement custom node types and it comes with components like a mini-map and graph controls.
              </p>
              <p className="px-3">
              Try creating your own flow diagram. You can modify the text of any of the nodes by clicking on the text and directly editing it. You can also add additional nodes by clicking the menu button on the 
              top right side of the application. You can drag and drop nodes (if not on mobile) or you can select the menu node and click on anywhere on the screen to create a node. To connect nodes simple click and drag on the handles on the left and right side of the node to create a new connection. On mobile devices you can simple click two handles to make a connection.
              </p>
          </div>   
          <div className={'mb-2 rounded-3 d-flex justify-content-center gx-0 col-12'} style = {{minHeight:'600px'}}>
              <ReactFlowDemo 
                className = {"flex-grow-1 rounded-3"}
              />
          </div>      

          <hr className="bg-brand opacity-100 my-4"/>

          <div className="col">
              <h3 className="text-center pt-lg-0">Graph Data Viewer</h3>
              <p className="px-3">
              This application for building node-based graphs. You can easily implement custom node types and it comes with components like a mini-map and graph controls.
              </p>
              <p className="px-3">
              Try creating your own flow diagram. You can modify the text of any of the nodes by clicking on the text and directly editing it. You can also add additional nodes by clicking the menu button on the 
              top right side of the application. You can drag and drop nodes (if not on mobile) or you can select the menu node and click on anywhere on the screen to create a node. To connect nodes simple click and drag on the handles on the left and right side of the node to create a new connection. On mobile devices you can simple click two handles to make a connection.
              </p>
          </div>   
          <div className={'mb-2 rounded-3 d-flex justify-content-center border-theme gx-0 col-12'} style = {{minHeight:'400px'}}>
              <GraphDemo 
                
              />
          </div>      
        </div>
          
        <hr className="bg-brand opacity-100 my-4"/>

        <div className="px-lg-5">
          <h3 className="text-center pt-lg-0">Chat AI</h3>

          <Carousel
              showStatus = {false}
              autoPlay = {false}
              useKeyboardArrows = {false}
              showThumbs = {false}
              infiniteLoop = {false}
              onChange	= {()=>setResetCounter(p=>p+1)}
              // dynamicHeight={true}
          >
              <div key="slide1" className="pt-4 mt-4">
                  <AlgebraChat reset = {resetCounter}/>
              </div>
              <div key="slide2" className="pt-4 mt-4">
                  <BlackholeChat reset = {resetCounter}/>
              </div>
          </Carousel>
        </div>

        <hr className="bg-brand opacity-100 my-4"/>

      </div>   

      <CallToAction/>
    </Container>
  );
}
