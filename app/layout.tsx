import "./globals.css"
import { Inter } from "next/font/google"
import Providers from "./providers"
import ThemeSwitch from "./components/ThemeSwitch"
const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Balder",
  description: "Beautiful combat for your tabletop RPGs.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <Providers>
          <ThemeSwitch />
          {children}
        </Providers>
      </body>
    </html>
  )
}
