import { useContext } from "react"
import { AppTheme as Theme } from "./theme/ThemeEnum"
import { ThemeProvider } from "./ThemeProvider"

export default function Container(props){
    
    const {fg, bg} = useContext(ThemeProvider)  

    return(
        <div className={"flex-grow-1 bg-"+(bg)} >
            <div className={"container text-"+(fg)}>
                {props.children}
            </div>
        </div>
    )
}

