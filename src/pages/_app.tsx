import 'css/global.css';
import NextApp from 'next/app';

import { GlobalStyles, Meta } from 'components';
import { Provider as NextAuthProvider } from 'next-auth/client';
import { ToastProvider } from 'react-toast-notifications';
import { passwordProtect } from 'services/app-service';

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

App.getInitialProps = async (appContext) => {
  const appProps = await NextApp.getInitialProps(appContext);

  passwordProtect(appContext.ctx);

  return { ...appProps };
};

export default App;
