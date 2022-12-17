import Container from "../../components/utils/Container";
import ThreeProng from "../../components/pageComponents/ThreeProng";
import CallToAction from "../../components/pageComponents/CallToAction";
import { WindowSidebar, Kanban, CodeSquare } from "react-bootstrap-icons";
import { useContext, useState } from "react";
import useMediaQuery from "../../hooks/useMediaQuery";
import { ThemeProvider } from "../../components/utils/ThemeProvider";
import ReactFlowDemo from "../../components/techDemos/FlowBuilder/ReactFlow";

export default function WebApps() {
  
  const isDesktop = useMediaQuery('(min-width: 994px)')
  const [isViewMobile, setViewMobile] = useState(false)
  const {theme, invertTheme} = useContext(ThemeProvider)

  return (
  <Container>

    <div className={"col-"+(isViewMobile?"5 border px-4 mt-3 rounded-5 overflow-auto mx-auto border-theme":"12")} style = {{height:isViewMobile?"550px":""}}>
    
      <h1 className="text-center h3 mt-3 mb-3">Web Services</h1>
      <div className="col">
        <p className="px-lg-5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus est sem, pretium vel lacinia sit amet, laoreet iaculis lorem. Fusce laoreet ullamcorper urna, rhoncus condimentum diam venenatis vel. Sed hendrerit neque sit amet ipsum condimentum, vel laoreet erat fringilla. Vivamus laoreet mattis nunc, at laoreet justo varius id. Donec luctus maximus feugiat. Phasellus ligula urna, pharetra vel nibh ac, iaculis elementum dolor. Vivamus sollicitudin libero sapien, ut lacinia enim suscipit quis. Etiam in convallis libero. In condimentum velit et elit eleifend pulvinar. Nunc massa ipsum, efficitur auctor augue vel, maximus ultrices dui. In pellentesque mauris id nisl vestibulum, et accumsan metus aliquet. Fusce consectetur dapibus quam, eu gravida est mollis vel. Duis tempor, est nec condimentum malesuada, mi orci iaculis augue, a ultricies ligula arcu a nisl. Vestibulum euismod dictum ante vitae semper. Integer malesuada convallis quam sed blandit. Proin egestas augue et lectus tincidunt tincidunt.

        </p>
      </div>
      <hr className="border-theme"/>

      <ThreeProng
        smallColumn = {isViewMobile}
        title1 = "Websites"
        title2 = "Web Applications"
        title3 = "Work With Us"
        subtitle1 = "Do you need a website for personal use or your small business? We have you covered. Our best Engineers can make sure you get exactly what you are looking for."
        subtitle2 = "Will your site need data integration, interactivity, and dynamic rendering? Our team of experienced Engineers can help you create your vision."
        subtitle3 = " With our experience and expertise and your vision we can create a great team."
        btnText3 = "Get Started"
        icon1 = {<WindowSidebar/>}
        icon2 = {<Kanban/>}
        icon3 = {<CodeSquare/>}
      />
      <hr className="border-theme mb-3"/>
      
      <h1 className="text-center h3 mt-4 mb-4">Responsive Design</h1>

      <div className="d-flex row px-lg-4 gx-0">
        <div className="col text-center">
          <div>
            <p className="text-start">
              We build responsive websites and web applications. You can tell when a website isn&apos;t reponsive. For example, press this button to collapse the page to a mobile view:          
            </p>
            <button className="btn btn-border mb-2" onClick={()=>setViewMobile(p=>!p)}>
              {isViewMobile?"Switch To Desktop":"Responsive Mobile View"}
            </button>
          </div>
          <div>
            <p className="text-start">
              An important part of any website or web application is the user interace. The interface should be dynamic. We are capable of providing multiple themes.          
            </p>
            <button className="btn btn-border" onClick={invertTheme}>
              Switch to {(theme === "dark"?"light":"dark")} mode
            </button>
          </div>
          
          
        </div>
          

        <hr className="bg-brand opacity-100 my-4"/>

        <h1 className="text-center h3 mt-4 mb-4">Technical Demos</h1>

        <div className="d-flex row px-lg-4 gx-0">
          <div className={'mb-2 rounded-3 d-flex justify-content-center gx-0 '+(isViewMobile?"col-12":" col-12 col-lg-8  order-first")} style={{minHeight:"400px"}}>
            <ReactFlowDemo 
              className = {"flex-grow-1 rounded-3"}
              isDesktop = {isDesktop}  
            />
          </div>
          <div className="col">
            <h3 className="text-center pt-lg-0">Flow Builder</h3>
            <p className="px-3">
              React Flow is a library for building node-based graphs. You can easily implement custom node types and it comes with components like a mini-map and graph controls.
            </p>
            <p className="px-3">
              Try creating your own flow diagram.
            </p>
          </div>         
        </div>
      </div>
      <hr className="bg-brand opacity-100 my-4"/>

       <CallToAction/>
    </div>
    
  </Container>
  );
}