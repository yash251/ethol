import '../styles/globals.css'

import {
  LivepeerConfig,
  ThemeConfig,
  createReactClient,
  studioProvider,
} from '@livepeer/react';
 
const client = createReactClient({
  provider: studioProvider({ apiKey: '31e69b0c-4922-457e-8c50-62ade0c9125a' }),
});

function MyApp({ Component, pageProps }) {
  return (
    <LivepeerConfig client={client}>
      <Component {...pageProps} />
    </LivepeerConfig>
  )
}

export default MyApp
