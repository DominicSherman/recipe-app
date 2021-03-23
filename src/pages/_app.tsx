import 'css/global.css';

import { GlobalStyles, Meta } from 'components';
import { Provider as NextAuthProvider } from 'next-auth/client';
import { ApolloProvider } from '@apollo/client';
import { createApolloClient } from '../lib/apolloClient';
import { ToastProvider } from 'react-toast-notifications';

const apolloClient = createApolloClient();

function App({ Component, pageProps }) {
  return (
    <ApolloProvider client={apolloClient}>
      <NextAuthProvider session={pageProps.session}>
        <ToastProvider autoDismiss placement="bottom-center">
          <GlobalStyles />
          <Meta />
          <Component {...pageProps} />
        </ToastProvider>
      </NextAuthProvider>
    </ApolloProvider>
  );
}

export default App;
