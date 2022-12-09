import Loading from "./Loading"
import { useSession } from "next-auth/react"

export default function ProtectedContent(props){
    const { data: session, status } = useSession()

    if (session){
        return props.children
    }
    
    if (status === "loading"){
        return <Loading/>
    }

    return props.altContent

}