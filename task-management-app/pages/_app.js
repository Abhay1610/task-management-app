// pages/_app.js
import { SessionProvider } from "next-auth/react"; // Import SessionProvider from next-auth
import '../styles/globals.css'; // Import global CSS styles

function MyApp({ Component, pageProps }) {
  return (
    <SessionProvider session={pageProps.session}> {/* Wrap in SessionProvider */}
      <Component {...pageProps} />
    </SessionProvider>
  );
}

export default MyApp;
