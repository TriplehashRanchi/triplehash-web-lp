import Script from "next/script";

const pixelId = "1086217957223175";

export default function MetaPixel({ scriptId }) {
  return (
    <>
      <Script
        id={scriptId}
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '${pixelId}');
var eventId = '${scriptId}-' + Date.now() + '-' + Math.random().toString(36).slice(2);
fbq('track', 'Purchase', {}, {eventID: eventId});
(function() {
  var params = new URLSearchParams(window.location.search);
  var payload = JSON.stringify({
    eventName: 'Purchase',
    eventId: eventId,
    eventSourceUrl: window.location.href,
    fbclid: params.get('fbclid') || ''
  });

  if (navigator.sendBeacon) {
    var blob = new Blob([payload], { type: 'application/json' });
    if (navigator.sendBeacon('/api/meta-capi', blob)) return;
  }

  fetch('/api/meta-capi', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: payload,
    credentials: 'same-origin',
    keepalive: true
  }).catch(function() {});
})();
          `,
        }}
      />
      <noscript
        dangerouslySetInnerHTML={{
          __html: `<img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=${pixelId}&ev=PageView&noscript=1" />`,
        }}
      />
    </>
  );
}
