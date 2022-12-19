import Container from '../components/utils/Container';
import CallToAction from '../components/pageComponents/CallToAction';
import ReactFlowDemo from '../components/techDemos/FlowBuilder/ReactFlow';

export default function Index() {
  return (
    <Container>
      <div className='mt-3'>
       
       
      <h1 className="text-center h3 mt-4 mb-4">Technical Demos</h1>

        <div className="d-flex row px-lg-4 gx-0">
        
          <div className="col">
              <h3 className="text-center pt-lg-0">Flow Builder</h3>
              <p className="px-3">
              React Flow is a library for building node-based graphs. You can easily implement custom node types and it comes with components like a mini-map and graph controls.
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
        </div>
          
     
      </div>   

        <CallToAction/>
    </Container>
  );
}
