import { useContext } from "react"
import { ThemeProvider } from "./ThemeProvider"
import Footer from "./Footer"

export default function Container(props){
    
    const {fg, bg, theme} = useContext(ThemeProvider)  

    return(
        <div className={"flex-grow-1 d-flex flex-column bg-"+bg+" theme-"+theme} >
            <div className={"container gx-4 flex-grow-1 d-flex flex-column text-"+fg}>
                {props.children}
            </div>
            {!props.noFooter &&
                <Footer/>
            }
        </div>
    )
}

