import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";
import "./globals.css";

const notoSans = Noto_Sans({
  variable: "--font-noto-sans",
  subsets: ["cyrillic"],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Учебный проект NextJs",
  description: "Учебный проект по NextJs в PurpleSchool",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={`${notoSans.variable}`}>
        {children}
      </body>
    </html>
  );
}
