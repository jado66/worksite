import { useSession } from "next-auth/react"
import { useRouter } from 'next/router'
import UnderConstruction from "../UnderConstruction"

export default function UnderConstructionPage(props) {
    const router = useRouter()

    const { data: session, status } = useSession() 

  if (session) {
    return (
      <>
        {props.children}
      </>
    )
  }
  
  if(status === "loading"){
    return(
        null
    )
  }
  return <UnderConstruction pageName = {router.pathname}/>

}