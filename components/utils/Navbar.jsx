import Link from "next/link"
import { useSession } from "next-auth/react"
import { useEffect, useState } from "react"
import { signOut } from "next-auth/react"
import Socials from "./Socials"



export default function Navbar(props){
    
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
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-5 border-bottom border-brand border-2 " style={{zIndex:2}}>
            <div className="container-fluid">
                <Link className="navbar-brand text-brand" href="/">{businessName}</Link>
                <button 
                    className="navbar-toggler" 
                    type="button" 
                    data-bs-toggle="collapse" 
                    data-bs-target="#navbarTogglerDemo02" 
                >
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse " id="navbarTogglerDemo02">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
                        
                        
                        <li className="nav-item dropdown ">
                            <a className="nav-link dropdown-toggle text-brand" href="#" id="navbarScrollingDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Software
                            </a>
                            <ul className="dropdown-menu dropdown-menu-dark bg-dark border-brand " aria-labelledby="navbarScrollingDropdown">
                                <li><h6 class="dropdown-header text-brand text-center">Software Solutions</h6></li>
                                <li><hr className="dropdown-divider bg-brand mt-0 mx-3"/></li>
                                <li><Link className="dropdown-item text-brand" href="/apps/web">Web Applications</Link></li>
                                <li><Link className="dropdown-item text-brand" href="/apps/desktop">Desktop Applications</Link></li>
                                <li><Link className="dropdown-item text-brand" href="/apps/mobile">Mobile Applications</Link></li>

                                <li><hr className="dropdown-divider bg-brand "/></li>
                                <li><h6 class="dropdown-header text-brand text-center">High Tech Software</h6></li>
                                <li><hr className="dropdown-divider bg-brand mt-0 mx-3"/></li>
                                <li><Link className="dropdown-item text-brand" href="/high-tech/quantum-computing">Quantum Computing</Link></li>
                                <li><Link className="dropdown-item text-brand" href="/high-tech/blockchain-&-crypto">Blockchain/Crypto Apps</Link></li>

                            </ul>
                        </li>
                       
                        <li className="nav-item">
                            <Link className="nav-link text-brand" href="/engineering">Engineering</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-brand" href="/consulting">Consulting</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-brand" href="/contact">Contact</Link>
                        </li>
                    </ul>

                    {
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            {
                                session && (
                                    <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle text-brand" href="#" id="navbarScrollingDropdown2" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            Admin
                                        </a>
                                        <ul className="dropdown-menu" aria-labelledby="navbarScrollingDropdown2">
                                            <li><Link className="dropdown-item" href="/admin-dashboard">Admin Dashboard</Link></li>
                                            <li><Link className="dropdown-item" href="/mail">Mailroom</Link></li>
                                            <li><hr className="dropdown-divider"/></li>
                                            <li><a className="dropdown-item" href="#">Something else here</a></li>
                                        </ul>
                                    </li>
                                )
                            }
                            {hasLoggedIn && (  
                                <>
                                    {
                                        session ?
                                        <li><Link className="nav-link text-brand" href="/signout" onClick={signOut}>Sign Out</Link></li>
                                        :
                                        <li><Link className="nav-link text-brand" href="/signin">Sign In</Link></li>
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

