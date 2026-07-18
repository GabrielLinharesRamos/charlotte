import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

/* ─── Root Layout — Apenas HTML Shell ───────────────────────────────────────
   Sem header, sem footer, sem lógica.
   O layout visual (wrapper mobile, BottomNav, etc.) fica em cada Route Group.
──────────────────────────────────────────────────────────────────────────── */

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Fisio em Casa",
  description: "Seu aplicativo de fisioterapia personalizada",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${geistSans.variable}`}>
      <body style={{ margin: 0, padding: 0, background: "#F6F8FA" }}>
        {children}
      </body>
    </html>
  );
}
