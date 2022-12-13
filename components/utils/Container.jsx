import { useContext } from "react"
import { ThemeProvider } from "./ThemeProvider"
import Footer from "./Footer"

export default function Container(props){
    
    const {fg, bg, theme} = useContext(ThemeProvider)  

    return(
        <div className={"flex-grow-1 bg-"+bg+" theme-"+theme} >
            <div className={"container text-"+fg}>
                {props.children}
            </div>
            <Footer/>

        </div>
    )
}

