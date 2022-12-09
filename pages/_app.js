import '../styles/globals.css'
import App from 'next/app'

import { SessionProvider, getSession } from 'next-auth/react'
import '../styles/styles.scss'
import { useEffect } from 'react';
import AppBase from '../components/utils/AppBase';
import { useRouter } from 'next/router';
import { isUnderConstructionMap } from '../hooks/isUnderConstructionMap';
function MyApp({ Component, pageProps, session }) {
  
  const router = useRouter()
  
  const isUnderConstruction = true

  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []); 

  return (
    
    <SessionProvider session={session}>
      {isUnderConstruction && session === null
      ?
        <Component {...pageProps} />
      :

        <AppBase underConstruction = {isUnderConstruction} session>
          <Component {...pageProps} />
        </AppBase>  
      }
    </SessionProvider>
  )
}

MyApp.getInitialProps = async (appContext) => {
  // perhaps getSession(appContext.ctx) would also work
  const session = await getSession({ req: appContext.ctx.req })
  const appProps = await App.getInitialProps(appContext)
  return { ...appProps, session }
}

export default MyApp