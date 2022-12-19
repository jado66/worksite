import Link from "next/link";
import { useContext } from "react";
import { ThemeProvider } from "./ThemeProvider";

export default function Footer(){
    
    const {theme} = useContext(ThemeProvider)
    
    return(
        <footer className={"footer mt-auto py-3 bg-a2 theme-"+theme} >
            <div className="container">
                <div className="d-flex row text-center">
                    <div className="col text-theme-inv">
                        <Link className="text-theme-inv text-decoration-none" href={"/contact"}> 
                            Contact Us
                        </Link>
                    </div>
                    <div className="col text-theme-inv">
                    @ 2022 here is are business copyright
                    </div>
                    <div className="col text-theme-inv">
                        <Link className="text-theme-inv text-decoration-none" href={"/schedule"}> 
                            Get Started
                        </Link>
                        
                    </div>
                </div>
            </div>
        </footer>
    )
}

