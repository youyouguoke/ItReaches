"use client";

import Script from "next/script";

const GA_MEASUREMENT_ID = "G-ST3BS5QF22";
const PLAUSIBLE_DOMAIN = "itreachesguide.com";
const PLAUSIBLE_SCRIPT = "https://plausible.shipsolo.io/js/script.js";

export function Analytics() {
  return (
    <>
      {/* Google Analytics 4 */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
      <Script id="ga4-config" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}', {
            send_page_view: false,
            cookie_flags: 'SameSite=None;Secure'
          });
        `}
      </Script>

      {/* Plausible Analytics */}
      <Script
        src={PLAUSIBLE_SCRIPT}
        data-domain={PLAUSIBLE_DOMAIN}
        strategy="afterInteractive"
      />

      {/* Route change tracking for both tools */}
      <Script id="analytics-router" strategy="afterInteractive">
        {`
          (function() {
            var isProd = location.hostname === '${PLAUSIBLE_DOMAIN}' || location.hostname === 'www.${PLAUSIBLE_DOMAIN}';
            if (!isProd) return;

            function sendPageView() {
              var path = location.pathname + location.search;
              if (window.gtag) {
                window.gtag('event', 'page_view', { page_path: path });
              }
              if (window.plausible) {
                window.plausible('pageview', { u: location.href });
              }
            }

            sendPageView();

            var pushState = history.pushState;
            history.pushState = function() {
              pushState.apply(history, arguments);
              sendPageView();
            };

            window.addEventListener('popstate', sendPageView);
          })();
        `}
      </Script>
    </>
  );
}
