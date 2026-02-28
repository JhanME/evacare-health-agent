import type { Metadata } from "next";
import { Fraunces, DM_Sans } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  style: ["normal", "italic"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
});

export const metadata: Metadata = {
  title: "EvaCare+ — Acompañamiento oncológico por WhatsApp",
  description:
    "Eva responde dudas, recuerda medicamentos y detecta señales de alerta — por WhatsApp, a cualquier hora.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${fraunces.variable} ${dmSans.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
