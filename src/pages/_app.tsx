import '../Styles/global.css';

import { ChallegesProvider } from '../contexts/ChallengersContexts'

function MyApp({ Component, pageProps }) {
  return (
      <ChallegesProvider>
        <Component {...pageProps} />;
      </ChallegesProvider>
      
    
    
  )
}

export default MyApp;
