import type { Metadata, Viewport } from "next";
import "./globals.css";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://magic-tps.github.io/Portafolio";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Tomas Pastor Salazar | AI Engineer & Full Stack Developer",
    template: "%s | Tomas Pastor Salazar",
  },
  description:
    "Portafolio de Tomas Pastor Salazar, Ciencias de la Computación en UPC, enfocado en Inteligencia Artificial, Machine Learning, Computer Vision y Desarrollo Web.",
  keywords: [
    "Tomas Pastor Salazar",
    "AI Engineer",
    "Machine Learning",
    "Computer Vision",
    "Full Stack Developer",
    "Next.js",
    "UPC",
    "Lima Perú",
  ],
  authors: [{ name: "Tomas Pastor Salazar" }],
  creator: "Tomas Pastor Salazar",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Tomas Pastor Salazar | AI Engineer & Full Stack Developer",
    description:
      "Portafolio premium enfocado en IA, Machine Learning, Computer Vision y desarrollo web moderno.",
    url: "/",
    siteName: "Tomas Pastor Salazar Portfolio",
    locale: "es_PE",
    type: "website",
    images: [
      {
        url: "/images/ai-command-center.jpg",
        width: 1280,
        height: 720,
        alt: "AI engineering command center visual",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tomas Pastor Salazar | AI Engineer",
    description:
      "Inteligencia Artificial, Machine Learning, Computer Vision y Desarrollo Web Moderno.",
    images: ["/images/ai-command-center.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/icon-192.png",
  },
};

export const viewport: Viewport = {
  colorScheme: "dark",
  themeColor: "#050712",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="dark">
      <body>{children}</body>
    </html>
  );
}
