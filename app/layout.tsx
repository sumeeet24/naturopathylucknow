import type { Metadata } from "next";
import MobileStickyCTA from "@/components/MobileStickyCTA";
import { Lato, Playfair_Display } from 'next/font/google';
import "./globals.css";

const lato = Lato({
  subsets: ['latin'],
  weight: ['300', '400', '700'],
  variable: '--font-lato',
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-playfair',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    template: "%s | Natural Treatment Hospital Lucknow",
    default: "Best Naturopathy Clinic in Lucknow | Natural Treatment Hospital",
  },
  description: "Top-rated Naturopathy Centre in Lucknow. Specializing in drugless healing, mud therapy, shirodhara, yoga, and detox. Cure chronic diseases naturally at Natural Treatment Hospital.",
  keywords: [
    "Naturopathy in Lucknow",
    "Naturopathy Centre Lucknow",
    "Natural Healing Lucknow",
    "Yoga Therapy Lucknow",
    "Detox Center Lucknow",
    "Mud Therapy",
    "Shirodhara Lucknow",
    "Drugless Treatment",
    "Best Naturopath Lucknow",
    "Naturopathy Hospital Lucknow",
    "Naturopathic Clinic Lucknow",
    "Natural Treatment Hospital",
    "Dr Nand Lal Yadav",
    "Dr Neelam Kumari"
  ],
  metadataBase: new URL('https://naturopathlucknow.in'),
  alternates: {
    canonical: './',
  },
  verification: {
    google: "verification_token",
    yandex: "yandex_verification",
    other: {
      "me": ["biotb.instantreply@gmail.com", "https://naturopathlucknow.in"],
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://naturopathlucknow.in/',
    siteName: 'Natural Treatment Hospital Lucknow',
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: 'Natural Treatment Hospital Lucknow',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/opengraph-image'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${lato.variable} ${playfair.variable}`}>
      <body className="font-sans antialiased">
        {children}
        <MobileStickyCTA />
      </body>
    </html>
  );
}
