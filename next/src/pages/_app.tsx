import '../styles/globals.css'

import { AppProps } from 'next/app'
import Head from 'next/head'

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        {/* TODO Specify language and title in <SeoHead /> in the future */}
        {/* <meta lang="sk" /> */}
        {/* <title>{t('site.title')}</title> */}

        {/* <meta name="apple-mobile-web-app-title" content="TODO" /> */}

        {/* Favicon files generated with https://realfavicongenerator.net/ */}
        {/* <link rel="icon" href="/images/favicon.ico" type="image/x-icon" /> */}
        {/* <link rel="icon" href="/images/favicon.svg" type="image/svg+xml" sizes="any" /> */}
        {/* <link rel="icon" href="/images/favicon-48x48.png" type="image/png" sizes="48x48" /> */}
        {/* <link rel="apple-touch-icon" href="/images/apple-touch-icon.png" sizes="180x180" /> */}

        {/* <link rel="manifest" href="/manifest.json" /> */}

        {/* <meta name="msapplication-TileColor" content="#da532c" /> */}
        <meta name="theme-color" content="#ffffff" />
        {/* look for CookieConsent component for 3rd party scripts you'd expect to find here */}
      </Head>
      {/* <PlausibleProvider */}
      {/*   domain={isProd ? 'bratislava.sk' : 'testing.bratislava.sk'} */}
      {/*   taggedEvents */}
      {/*   // uncomment for local testing, needs to be run with `yarn build && yarn start` */}
      {/*   // trackLocalhost */}
      {/* > */}
      {/* eslint-disable-next-line no-secrets/no-secrets */}
      {/*   <BAQueryClientProvider> */}
      {/*     <QueryParamProvider adapter={NextAdapter}> */}
      {/*       <BAI18nProvider> */}
      {/*         <OverlayProvider> */}
      {/* <NavMenuContextProvider> */}
      {/* This root div is used for locked body when mobile menu ist open, see MobileNavMenu component */}
      <div id="root">
        <Component {...pageProps} />
      </div>
      {/* </NavMenuContextProvider> */}
      {/* </OverlayProvider> */}
      {/* </BAI18nProvider> */}
      {/* </QueryParamProvider> */}
      {/* </BAQueryClientProvider> */}
      {/* </PlausibleProvider> */}
      {/* </NextIntlClientProvider> */}
    </>
  )
}
export default App
