import '../public/styles/globals.css'
import type { AppProps } from 'next/app'
import Inspect from 'inspx'

function Oceaners({ Component, pageProps: { session, ...pageProps } }: AppProps) {
   return (
      <Inspect>
         <Component {...pageProps} />
      </Inspect>
   )
}

export default Oceaners
