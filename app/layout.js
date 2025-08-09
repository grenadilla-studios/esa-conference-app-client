import { Josefin_Sans as Josie, Jost } from "next/font/google"
import "#/styles/globals.scss"
import "#/styles/one.scss"

const josie = Josie({
  variable: "--font-josefin-sans",
  subsets: ["latin"],
})

const colin = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
})

export const metadata = {
  title: "ESA Scavenger Land",
  description: "ESA 2025 Scavenger Hunt",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${josie.variable} ${colin.variable}`}>{children}</body>
    </html>
  )
}
