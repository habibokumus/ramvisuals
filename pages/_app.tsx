import '../public/styles/globals.css'
import type { AppProps } from 'next/app'
import { SessionProvider } from 'next-auth/react'

function Oceaners({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    // <SessionProvider session={session}>
    <Component {...pageProps} />
    // </SessionProvider>
  )
}

export default Oceaners
