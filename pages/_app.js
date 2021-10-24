import "../styles/globals.css";
import "tailwindcss/tailwind.css";

import SiteLayout from "../components/siteLayout";

function MyApp({ Component, pageProps }) {
  return (
    <SiteLayout>
      <Component {...pageProps} />
    </SiteLayout>
  );
}

export default MyApp;
