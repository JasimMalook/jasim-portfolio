import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Jasim | Full-Stack Developer & Automation Specialist",
    template: "%s | Jasim Malook",
  },
  description:
    "I build fast, scalable web & mobile apps, AI automations, and SaaS solutions for startups worldwide.",
  metadataBase: new URL("https://jasim-portfolio.vercel.app"),
  openGraph: {
    title: "Jasim | Full-Stack Developer & Automation Specialist",
    description:
      "I build fast, scalable web & mobile apps, AI automations, and SaaS solutions for startups worldwide.",
    url: "https://jasim-portfolio.vercel.app",
    siteName: "Jasim Malook",
    images: [
      {
        url: "/images/jasim.png",
        width: 800,
        height: 800,
        alt: "Jasim Malook – Full-Stack Developer & Automation Specialist",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jasim | Full-Stack Developer & Automation Specialist",
    description:
      "I build fast, scalable web & mobile apps, AI automations, and SaaS solutions for startups worldwide.",
    images: ["/images/jasim.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${outfit.variable} antialiased bg-background text-foreground`} suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
