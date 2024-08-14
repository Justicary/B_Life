import "../globals.css";
import { Prompt } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";
import type { Metadata } from "next";
import Wrapper from "./Wrapper";

const prompt = Prompt({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "B Life by VEMG",
  description: "Prueba Técnica realizada en Next.js",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const messages = await getMessages();
  return (
    <html lang={await getLocale()} suppressHydrationWarning>
      <body className={`${prompt.className}`}>
        <NextIntlClientProvider messages={messages}>
          <Wrapper>{children}</Wrapper>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
