import Container from "../../components/utils/Container";
import UnderConstructionPage from "../../components/utils/UnderConstructionPage";
import ThemeSwitcher from "../../components/utils/ThemeSwitcher";
import ThreeProng from "../../components/utils/ThreeProng";

import { WindowSidebar, Kanban, CodeSquare } from "react-bootstrap-icons";
import { useContext, useState } from "react";
import useMediaQuery from "../../hooks/useMediaQuery";
import { ThemeProvider } from "../../components/utils/ThemeProvider";

export default function WebApps() {
  
  const isDesktop = useMediaQuery('(min-width: 994px)')
  const [isViewMobile, setViewMobile] = useState(false)
  const {theme, invertTheme} = useContext(ThemeProvider)

  return (
    <UnderConstructionPage>
      <Container>

      <div className={"col-"+(isViewMobile?"5 border px-4 mt-3 rounded-5 overflow-auto mx-auto border-theme":"12")} style = {{height:isViewMobile?"550px":""}}>
      
        <h1 className="text-center h2 mt-4">Web Services</h1>
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

        <div className="d-flex row px-4">
          <div className="col">
            <p className="pe-3">
              We build responsive websites and web applications. You can tell when a website isn't reponsive. For example, press this button to collapse the page to a mobile view:          
            </p>
            <p>
            An important part of any website or web application is the user interace. The interface should be dynamic. We are capable of providing multiple themes.          

            </p>
          </div>
          <div className='col-2 d-flex flex-column justify-content-center gx-0 ' style={{minHeight:"50px"}}>
            
            <button className="btn btn-border mb-2" onClick={()=>setViewMobile(p=>!p)}>
              {isViewMobile?"Switch To Desktop":"Responsive Mobile View"}
            </button>
            <button className="btn btn-border" onClick={invertTheme}>
              Switch to {(theme === "dark"?"light":"dark")} mode
            </button>
          </div>
          
          
        </div>


      
        </div>

      </Container>
    </UnderConstructionPage>
  );
}