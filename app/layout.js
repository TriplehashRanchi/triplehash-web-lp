import "./globals.css";

const switzerStylesheet =
  "https://api.fontshare.com/v2/css?f[]=switzer@100,200,300,400,500,600,700,800,900&display=swap";
const satoshiStylesheet =
  "https://api.fontshare.com/v2/css?f[]=satoshi@300,400,500,700&display=swap";

export const metadata = {
  title: "TripleHash | Custom AI Systems for Your Business",
  description: "In 30 days, TripleHash builds a custom AI system trained on how you think and decide, so your team gets your answers without calling you.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">
        <link rel="stylesheet" href={switzerStylesheet} />
        <link rel="stylesheet" href={satoshiStylesheet} />
        {children}
      </body>
    </html>
  );
}
