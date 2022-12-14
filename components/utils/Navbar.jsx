import Link from "next/link"
import { useSession } from "next-auth/react"
import { useContext, useEffect, useState } from "react"
import { signOut } from "next-auth/react"
import { ThemeProvider } from "./ThemeProvider"

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
        <nav className={"navbar navbar-expand-lg border-bottom border-2 px-5 navbar-"+theme+" bg-"+bg + " border-"+fg} style={{zIndex:2}}>
            <div className="container-fluid">
                <Link className={"navbar-brand text-"+fg} href="/">{businessName}</Link>
                <button 
                    className={"border-opacity-50 navbar-toggler"}
                    type="button" 
                    data-bs-toggle="collapse" 
                    data-bs-target="#navbarTogglerDemo02" 
                >
                <span className={"navbar-toggler-icon text-"+fg}></span>
                </button>
                <div className="collapse navbar-collapse " id="navbarTogglerDemo02">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
                        
                        
                        <li className="nav-item dropdown ">
                            <a className={"nav-link dropdown-toggle text-"+fg} href="#" id="navbarScrollingDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Software
                            </a>
                            <ul className={"dropdown-menu border-"+fg+" bg-"+bg} aria-labelledby="navbarScrollingDropdown">
                                <li><h6 className={"dropdown-header text-center text-"+fg}>Software Solutions</h6></li>
                                <li><hr className={"dropdown-divider mt-0 mx-3 bg-"+fg}/></li>
                                <li><Link className={"dropdown-item text-"+fg} href="/apps/web">Web Products </Link></li>
                                <li><Link className={"dropdown-item text-"+fg} href="/apps/desktop">Desktop Products</Link></li>
                                <li><Link className={"dropdown-item text-"+fg} href="/apps/mobile">Mobile Products</Link></li>

                                <li><hr className={"dropdown-divider bg-"+fg}/></li>
                                <li><h6 className={"dropdown-header text-center text-"+fg}>High Tech Software</h6></li>
                                <li><hr className={"dropdown-divider mt-0 mx-3 bg-"+fg}/></li>
                                <li><Link className={"dropdown-item text-"+fg} href="/high-tech/quantum-computing">Quantum Computing</Link></li>
                                <li><Link className={"dropdown-item text-"+fg} href="/high-tech/blockchain-&-crypto">Blockchain/Crypto Apps</Link></li>

                            </ul>
                        </li>
                       
                        <li className="nav-item">
                            <Link className={"nav-link text-"+fg} href="/engineering">Engineering</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={"nav-link text-"+fg} href="/consulting">Consulting</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={"nav-link text-"+fg} href="/contact">Contact</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={"nav-link text-"+fg} href="/about">About</Link>
                        </li>
                    </ul>

                    {
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            {
                                session && (
                                    <li className="nav-item dropdown">
                                        <a className={"nav-link dropdown-toggle text-"+fg} href="#" id="navbarScrollingDropdown2" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            Admin
                                        </a>
                                        <ul className={"dropdown-menu  border-"+fg+" bg-"+bg} aria-labelledby="navbarScrollingDropdown2">
                                            <li><Link className={"dropdown-item text-"+fg} href="/admin/dashboard">Admin Dashboard</Link></li>
                                            <li onClick={invertTheme}><Link className={"dropdown-item text-"+fg} href="#">Invert Theme</Link></li>
                                            <li><Link className={"dropdown-item text-"+fg} href="/admin/demos">Demos</Link></li>
                                            <li><Link className={"dropdown-item text-"+fg} href="/admin/mail">Mailroom</Link></li>
                                            <li><Link className={"dropdown-item text-"+fg} href="/404">404</Link></li>

                                            <li><hr className={"dropdown-divider bg-"+fg}/></li>
                                            <li><a className={"dropdown-item text-"+fg} href="#">Something else here</a></li>
                                        </ul>
                                    </li>
                                )
                            }
                            {hasLoggedIn && (  
                                <>
                                    {
                                        session ?
                                        <li><Link className={"nav-link text-"+fg} href="/signout" onClick={signOut}>Sign Out</Link></li>
                                        :
                                        <li><Link className={"nav-link text-"+fg} href="/signin">Sign In</Link></li>
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

