import { useState } from "react";
import AppBase from "../components/utils/AppBase";

import { signIn, providers } from "next-auth/react"

export default function Singin({providers}) {

    return (
        // <AppBase>
            <form className="form-signin text-center" style={{maxWidth:"333px", margin:"0 auto"}}>
                
                <h1 className="h3 mb-3 font-weight-normal">Admin Login</h1>
                
                <div className="d-flex">
                    <button className="btn btn-lg btn-primary btn-block flex-grow-1 " type="button" onClick={()=>signIn('auth0','/')}>Sign in</button>
                </div>
            </form>
        // </AppBase>
    );
}