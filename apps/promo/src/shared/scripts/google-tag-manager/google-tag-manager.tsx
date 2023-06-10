import Script from "next/script";

export default function GoogleTagManager() {
  return (
    <>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=GTM-KRLWHB3"
        strategy="afterInteractive"
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        data-google-tag-manager-datalayer-init
      >
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'GTM-KRLWHB3');
        `}
      </Script>
    </>
  );
}

export function GoogleTagManagerNoscript() {
  return (
    <noscript>
      <iframe
        src="https://www.googletagmanager.com/ns.html?id=GTM-KRLWHB3"
        height="0"
        width="0"
        style={{
          display: "none",
          visibility: "hidden",
        }}
      ></iframe>
    </noscript>
  );
}
