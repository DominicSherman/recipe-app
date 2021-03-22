import 'css/global.css';

import { GlobalStyles, Meta } from 'components';
import { Provider as NextAuthProvider } from 'next-auth/client';
import { ToastProvider } from 'react-toast-notifications';

function App({ Component, pageProps }) {
  return (
    <NextAuthProvider session={pageProps.session}>
      <ToastProvider autoDismiss placement="bottom-center">
        <GlobalStyles />
        <Meta />
        <Component {...pageProps} />
      </ToastProvider>
    </NextAuthProvider>
  );
}

export default App;
