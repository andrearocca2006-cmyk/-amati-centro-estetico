import type { Metadata } from "next";
import "./globals.css";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const assetPath = (path: string) => `${basePath}${path}`;

export const metadata: Metadata = {
  metadataBase: new URL("https://amati-centro-estetico.sneakers-tot.chatgpt.site"),
  title: "Centro estetico a Cagliari e Villacidro | Àmati",
  description:
    "Centro estetico Àmati a Cagliari e Villacidro: percorsi personalizzati per viso, corpo, epilazione laser, beauty e relax.",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: false,
    follow: false,
    nocache: true,
  },
  icons: {
    icon: assetPath("/images/amati-logo.webp"),
    shortcut: assetPath("/images/amati-logo.webp"),
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it">
      <head>
        <link
          rel="preload"
          as="image"
          href={assetPath("/images/centro-estetico-amati-trattamento-manuale.webp")}
          type="image/webp"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
