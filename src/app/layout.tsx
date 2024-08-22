import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import GoogleTagManager from "@/components/component/googletagManager";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DNservicer",
  description: "DNservicer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <GoogleTagManager />
      <body className={inter.className}>{children}
        <noscript>
          <iframe src={`https://www.googletagmanager.com/ns.html?id=GTM-TFSKCSDC`}
            height="0" width="0" style={{ display: 'none', visibility: 'hidden' }}></iframe>
        </noscript>
      </body>
    </html>
  );
}