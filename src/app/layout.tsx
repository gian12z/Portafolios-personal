import type { Metadata } from 'next'
import './global.css'
import favicon from './mi_img_ico.png'

// ============================================================
// IMPORTS - Providers
// ============================================================
import { ThemeContextProvider } from "../providers/ThemeContext";
import ReCaptchaProvider from '@src/providers/GoogleReCaptchaProvider';
import { LanguageProvider } from '@src/providers/LanguageProvider';


// ============================================================
// IMPORTS - UI Components
// ============================================================
import { NavBar, Footer } from '@app/ui/barrel_files/components'


// ============================================================
// METADATA
// ============================================================
export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_DOMAIN || "http://localhost:3000"),
  icons: {
    icon: favicon.src,
  },
  title: {
    default: "Gianluca Zanconi Portfolio",
    template: "%s | Gianluca Zanconi",
  },
  description:
    "Portfolio de Gianluca Zanconi: proyectos reales con React/Next.js, .NET, Oracle PL/SQL, scraping y automatización.",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    url: "/",
    title: "Gianluca Zanconi Portfolio",
    description:
      "Proyectos con React/Next.js, .NET y Oracle. Casos reales, foco en performance y escalabilidad.",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Portfolio de Gianluca Zanconi" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gianluca Zanconi | Portfolio",
    description:
      "Proyectos con React/Next.js, .NET y Oracle. Casos reales, foco en performance y escalabilidad.",
    images: ["/og.png"],
  },
};


// ============================================================
//  LAYOUT
// ============================================================

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className='bg-theme-bg dark:bg-themedark-bg'>
        <LanguageProvider defaultLocale="en">
          <ThemeContextProvider>
            <ReCaptchaProvider>
              <NavBar />
              {children}
              <Footer />
            </ReCaptchaProvider>
          </ThemeContextProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
