"use client";

import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { I18nextProvider } from "react-i18next";
import i18n from "@/lib/i18n";

const notoSansThai = localFont({
  src: [
    {
      path: "./fonts/NotoSansThai-Black.ttf",
      weight: "900",
      style: "normal",
    },
    {
      path: "./fonts/NotoSansThai-ExtraBold.ttf",
      weight: "800",
      style: "normal",
    },
    {
      path: "./fonts/NotoSansThai-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/NotoSansThai-Semibold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "./fonts/NotoSansThai-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/NotoSansThai-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/NotoSansThai-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "./fonts/NotoSansThai-ExtraLight.ttf",
      weight: "200",
      style: "normal",
    },
    {
      path: "./fonts/NotoSansThai-Thin.ttf",
      weight: "100",
      style: "normal",
    },
  ],
  variable: "--font-noto-sans-thai",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <title>Phanthakarn&apos;s Resume</title>
        <meta
          name="description"
          content="This is Phanthakarn's resume showcasing skills and work experience."
        />
      </head>
      <body
        className={notoSansThai.variable}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <I18nextProvider i18n={i18n}>{children}</I18nextProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
