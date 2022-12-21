import Link from "next/link"
import { useSession } from "next-auth/react"
import { useContext, useEffect, useState } from "react"
import { signOut } from "next-auth/react"
import { ThemeProvider } from "./ThemeProvider"
import { CloudMoon, Sun } from 'react-bootstrap-icons';

export default function Navbar(props){
    
    const {fg, bg, theme, invertTheme} = useContext(ThemeProvider)

    const [hasLoggedIn, setHasLoggedIn] = useState(false)
    const { data: session } = useSession()

    const businessNames = ["NO-V8","Fabricate AI","Devise Inc.","Bro-knees LLC",'Intechify Solutions',"Concienvable","Envision.io","Envision.ai","Portfol.io","Imagine.io"]
    const [businessName, setBusinessName] = useState();

    useEffect(()=>{

        setBusinessName(businessNames[Math.floor(Math.random()*businessNames.length)])


        if (session){
            localStorage.setItem("adminComputer",true)
            setHasLoggedIn(true)
        }
        else{
            const hasLoggedIn = localStorage.getItem("adminComputer")

            if (hasLoggedIn){
                setHasLoggedIn(hasLoggedIn)
            }
        }

    },[session])

    return(
        <nav className={"navbar navbar-expand-lg border-bottom border-2 px-5 navbar-"+theme+ " bg-"+ bg + " border-"+fg+" theme-"+theme} style={{zIndex:2}}>
            <div className="container-fluid">
                
                <Link className={"navbar-brand text-theme"} href="/">{businessName}</Link>
                {theme}
                <button 
                    className={"border-opacity-50 navbar-toggler"}
                    type="button" 
                    data-bs-toggle="collapse" 
                    data-bs-target="#navbarTogglerDemo02" 
                >
                <span className={"navbar-toggler-icon text-theme"}></span>
                </button>
                <div className="collapse navbar-collapse " id="navbarTogglerDemo02">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
                        
                        
                        <li className="nav-item dropdown ">
                            <a className={"nav-link dropdown-toggle text-theme"} href="#" id="navbarScrollingDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Software
                            </a>
                            <ul className={"dropdown-menu border-theme bg-theme"} aria-labelledby="navbarScrollingDropdown">
                                <li><h6 className={"dropdown-header text-center text-theme"}>Software Solutions</h6></li>
                                <li><hr className={"dropdown-divider mt-0 mx-3 bg-theme-inv"}/></li>
                                <li><Link className={"dropdown-item bg-transparent text-theme"} href="/apps/web">Web Products </Link></li>
                                <li><Link className={"dropdown-item bg-transparent text-theme"} href="/apps/desktop">Desktop Products</Link></li>
                                <li><Link className={"dropdown-item bg-transparent text-theme"} href="/apps/mobile">Mobile Products</Link></li>

                                <li><hr className={"dropdown-divider bg-theme-inv"}/></li>
                                <li><h6 className={"dropdown-header text-center text-theme"}>High Tech Software</h6></li>
                                <li><hr className={"dropdown-divider mt-0 mx-3 bg-theme-inv"}/></li>
                                <li><Link className={"dropdown-item bg-transparent text-theme"} href="/high-tech/ai-&-ml">AI & Machine Learning</Link></li>
                                <li><Link className={"dropdown-item bg-transparent text-theme"} href="/high-tech/quantum-computing">Quantum Computing</Link></li>
                                <li><Link className={"dropdown-item bg-transparent text-theme"} href="/high-tech/blockchain-&-crypto">Blockchain/Crypto Apps</Link></li>

                            </ul>
                        </li>
                       
                        <li className="nav-item">
                            <Link className={"nav-link text-theme"} href="/engineering">Engineering</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={"nav-link text-theme"} href="/consulting">Consulting</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={"nav-link text-theme"} href="/tech-demos">Demos</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={"nav-link text-theme"} href="/contact">Contact</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={"nav-link text-theme"} href="/about">About</Link>
                        </li>
                    </ul>

                    {
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li>
                                <button 
                                    className={"nav-link text-theme btn border-0 shadow-none h-100 d-flex align-items-center"} 
                                    onClick = {()=>{invertTheme()}}
                                >
                                    {theme === 'dark'
                                    ?
                                        <Sun/>
                                    :
                                        <CloudMoon/>
                                    }
                                    
                                </button>
                            </li>
                            {
                                session && (
                                    <li className="nav-item dropdown">
                                        <a className={"nav-link dropdown-toggle text-theme"} href="#" id="navbarScrollingDropdown2" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            Admin
                                        </a>
                                        <ul className={"dropdown-menu border-theme bg-theme"} aria-labelledby="navbarScrollingDropdown2">
                                            <li><Link className={"dropdown-item bg-transparent text-theme"} href="/admin/dashboard">Admin Dashboard</Link></li>
                                            <li onClick={invertTheme}><Link className={"dropdown-item bg-transparent text-theme"} href="#">Invert Theme</Link></li>
                                            <li><Link className={"dropdown-item bg-transparent text-theme"} href="/admin/demos">Demos</Link></li>
                                            <li><Link className={"dropdown-item bg-transparent text-theme"} href="/admin/mail">Mailroom</Link></li>
                                            <li><Link className={"dropdown-item bg-transparent text-theme"} href="/404">404</Link></li>

                                            <li><hr className={"dropdown-divider bg-theme-inv"}/></li>
                                            <li><a className={"dropdown-item bg-transparent text-theme"} href="#">Something else here</a></li>
                                        </ul>
                                    </li>
                                )
                            }
                            
                            {hasLoggedIn && (  
                                <>
                                    {
                                        session ?
                                        <li><Link className={"nav-link text-theme"} href="/signout" onClick={signOut}>Sign Out</Link></li>
                                        :
                                        <li><Link className={"nav-link text-theme"} href="/signin">Sign In</Link></li>
                                    }
                                </>
                            )}
                        </ul>
                    }
                </div>
            </div>
        </nav>
    )
}

