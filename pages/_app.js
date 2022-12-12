import '../styles/globals.css'
import App from 'next/app'
import { AppTheme as Theme} from '../components/utils/theme/ThemeEnum'
import { SessionProvider, getSession } from 'next-auth/react'
import '../styles/styles.scss'
import { useEffect, useState } from 'react';
import AppBase from '../components/utils/AppBase';
import { ThemeProvider } from '../components/utils/ThemeProvider'

function MyApp({ Component, pageProps, session }) {
  
  
  const isUnderConstruction = true

  const [theme, setTheme] = useState(Theme.Dark)
  const [fg, setFg] = useState('fg-dark')
  const [bg, setBg] = useState('bg-dark')

  const invertTheme = () => {
    setTheme(prev => prev === Theme.Dark ? Theme.Light : Theme.Dark)
    setFg(prev => prev === "fg-dark"? "fg-light" : "fg-dark")
    setBg(prev => prev === "bg-dark" ? "bg-light" : "bg-dark")
  }

  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []); 

  return (
    
    <SessionProvider session={session}>
      {isUnderConstruction && session === null
      ?
        <ThemeProvider.Provider 
          value = {{
            theme: theme,
            fg: fg,
            bg: bg,
            invertTheme: invertTheme
          }}
        >
          <Component {...pageProps} />
        </ThemeProvider.Provider>
      :
        <ThemeProvider.Provider
          value = {{
            theme: theme,
            fg: fg,
            bg: bg,
            invertTheme: invertTheme
          }}
        >
          <AppBase underConstruction = {isUnderConstruction} session>
            <Component {...pageProps} />
          </AppBase>  
        </ThemeProvider.Provider>
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