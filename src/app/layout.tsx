 
import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/providers/theme-providers";
import { ClerkProvider } from "@clerk/nextjs";
import {dark} from '@clerk/themes'
import ModalProvider from "@/providers/modal-provider";
 import { Toaster } from "@/components/ui/sonner";
import { BillingProvider } from "@/providers/billing-provider";


const font = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "workflow",
  description: "Automate your work with workflow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.svg" />
      </head>
      <ClerkProvider
        appearance={{
          baseTheme: dark,
        }}
        publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}
      >
        <body className={font.className}>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            // disableTransitionOnChange
          >
            <BillingProvider>
              <ModalProvider>
                {children}
                <Toaster />
              </ModalProvider>
            </BillingProvider>
          </ThemeProvider>
        </body>
      </ClerkProvider>
    </html>
  );
}
