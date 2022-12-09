import Link from "next/link"
import { useSession } from "next-auth/react"
import { useEffect, useState } from "react"
import { signOut } from "next-auth/react"
import Socials from "./Socials"



export default function Navbar(props){
    
    const [hasLoggedIn, setHasLoggedIn] = useState(false)
    const { data: session } = useSession()

    useEffect(()=>{

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
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-5 " style={{zIndex:2}}>
            <div className="container-fluid">
                <Link className="navbar-brand text-light" href="/">Business Name</Link>
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
                        
                        
                        {/* <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle text-light" href="#" id="navbarScrollingDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Coaching
                            </a>
                            <ul className="dropdown-menu dropdown-menu-dark bg-dark border-0" aria-labelledby="navbarScrollingDropdown">
                                <li><a className="dropdown-item" href="#">Social Media Coaching</a></li>
                                <li><a className="dropdown-item" href="#">Talent Coaching</a></li>
                                <li><hr className="dropdown-divider bg-light"/></li>
                                <li><a className="dropdown-item" href="#">Life Coaching</a></li>
                            </ul>
                        </li> */}
                        <li className="nav-item">
                            <Link className="nav-link text-light" href="/apps">Application Development</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-light" href="/engineering">Engineering</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-light" href="/consulting">Consulting</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-light" href="/contact">Contact</Link>
                        </li>
                    </ul>

                    {
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            {
                                session && (
                                    <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle text-light" href="#" id="navbarScrollingDropdown2" role="button" data-bs-toggle="dropdown" aria-expanded="false">
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
                                        <li><Link className="nav-link text-light" href="/signout" onClick={signOut}>Sign Out</Link></li>
                                        :
                                        <li><Link className="nav-link text-light" href="/signin">Sign In</Link></li>
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

