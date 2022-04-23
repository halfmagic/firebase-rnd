import { initializeApp } from 'firebase/app'
import type { AppProps } from 'next/app'
import firebaseConfig from '../src/firebase/config'
import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  const fb = initializeApp(firebaseConfig)

  return <Component {...pageProps} fb={fb} />
}

export default MyApp
