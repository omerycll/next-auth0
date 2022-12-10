import { Auth0Provider } from "@auth0/auth0-react";
import '../styles/globals.css'

function App({ Component, pageProps }) {
  return (
    <Auth0Provider
      domain={process.env.AUTH0_DOMAIN}
      clientId={process.env.AUTH0_CLIENT_ID}
      redirectUri={process.env.AUTH0_REDIRECT_URI}
    >
      <Component {...pageProps} />
    </Auth0Provider>
  );
}

export default App
