import ThemeProvider from '../interface/lib/contextapis/ThemeProvider'
import '../styles/global/globals.css'
import "../styles/home/HomeScreen.css"
import "../styles/home/HeroSection.css"

import "../styles/projects/ProjectScreen.css"



function MyApp({ Component, pageProps }) {
  return <>
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  </>
}

export default MyApp
