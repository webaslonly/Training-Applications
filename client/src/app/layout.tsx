import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/provider/theme-provider";
import { ClerkProvider } from "@clerk/nextjs";
import { LanguageProvider } from "@/contexts/language-context";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Training Applications",
  description: "Professional training platform for Adobe applications",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="en" suppressHydrationWarning>
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
          suppressHydrationWarning
        >
          <ClerkProvider
          appearance={{
            baseTheme: undefined,
            variables: {
              colorPrimary: '#0c14a3',
              colorText: 'hsl(var(--foreground))',
              colorBackground: 'hsl(var(--background))',
              colorInputBackground: 'hsl(var(--input))',
              colorInputText: 'hsl(var(--foreground))',
            },
            elements: {
              formButtonPrimary: 'btn',
              card: 'bg-background border rounded-lg p-6',
              headerTitle: 'text-xl font-bold',
              headerSubtitle: 'text-muted-foreground',
              socialButtonsBlockButton: 'btn',
              socialButtonsBlockButtonText: 'text-foreground',
              formFieldLabel: 'text-foreground',
              formFieldInput: 'bg-input text-foreground border border-input',
            },
          }}
          publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY!}
        >
          <ThemeProvider
            attribute='class'
            defaultTheme='dark'
            enableSystem
            disableTransitionOnChange
          >
            <LanguageProvider>
              {children}
            </LanguageProvider>
          </ThemeProvider>
        </ClerkProvider>
        </body>
      </html>
  );
}
