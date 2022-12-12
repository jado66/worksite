import { useContext, useEffect, useState } from "react"
import { ThemeProvider } from "./ThemeProvider"

export default function ThemeSwitcher(){
    
    const {invertTheme} = useContext(ThemeProvider)
    
    return<button onClick={invertTheme}>Switch Themes</button>
}