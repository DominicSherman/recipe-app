import 'css/global.css';
import 'draft-js/dist/Draft.css';
import 'draftail/dist/draftail.css';

import { Meta } from 'components';
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
          <Meta />
          <Component {...pageProps} />
          <div id="modal-root" />
        </ToastProvider>
      </NextAuthProvider>
    </ApolloProvider>
  );
}

export default App;
