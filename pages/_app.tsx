import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { MoralisProvider } from 'react-moralis'
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MoralisProvider
      serverUrl="https://4ndfudtcmata.usemoralis.com:2053/server"
      appId="SCxky5jFqNUtRT6GBP0OXXExdnwev75hGOj0H4AU"
    >
      <Component {...pageProps} />
    </MoralisProvider>
  )
}

export default MyApp
