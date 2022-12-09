import Navbar from "./Navbar"
export default function AppBase(props){
    return (
        <>
            <div className={"flex-grow-1 d-flex flex-column gx-0"}>
            <Navbar/>
                
            <div className={"flex-grow-1 d-flex flex-column gx-0 "+(!props.underConstruction?"container":"")}>
                {props.children}
            </div>        
        </div>  
          
        
          </> 
    )
}