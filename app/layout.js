import { Inter } from "next/font/google";
import "./globals.css";
// import "./styles/globaltest.css" //Importing global css

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Hunting Coders Next JS",
  description: "Generated by create next app"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true} className={inter.className}>{children}</body>
    </html>
  );
}