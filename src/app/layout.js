import { Varela_Round, Geist, Geist_Mono, Tangerine } from "next/font/google";
import "./globals.css";

// Configure Geist Sans font
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

// Configure Geist Mono font
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Configure Tangerine font
const tangerine = Tangerine({
  variable: "--font-tangerine",
  subsets: ["latin"],
  weight: "400", // Tangerine only has 400 weight
});

// Configure Varela Round font
const varelaRound = Varela_Round({
  variable: "--font-varela-round", // Fixed typo in the variable name
  subsets: ["latin"],
  weight: "400", // Varela Round only supports 400 weight
});

export const metadata = {
  title: "I Love You Cat!",
  description: "For Valentine's",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${tangerine.variable} ${varelaRound.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
