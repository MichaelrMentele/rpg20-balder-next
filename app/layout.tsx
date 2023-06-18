import "./globals.css"
import { Inter } from "next/font/google"
import Providers from "./providers"
import ThemeSwitch from "@/components/ThemeSwitch"
import { cn } from "@/lib/utils"
import React from "react"
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
} from "@/components/ui/menubar"
import Link from "next/link"
import { CrownIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Balder",
  description: "Beautiful combat for your tabletop RPGs.",
}

// import { cn } from "@/lib/utils"

// const Card = React.forwardRef<
//   HTMLDivElement,
//   React.HTMLAttributes<HTMLDivElement>
// >(({ className, ...props }, ref) => (
//   <div
//     ref={ref}
//     className={cn(
//       "rounded-lg border bg-card text-card-foreground shadow-sm py-1 px-2",
//       className
//     )}
//     {...props}
//   />
// ))
// Card.displayName = "Card"

const GMOrPlayerSwitch = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("", className)} {...props}>
    <Button variant="ghost">
      <CrownIcon />
    </Button>
  </div>
))
GMOrPlayerSwitch.displayName = "GMOrPlayerSwitch"

const AppBar = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "fixed flex flex-row justify-between items-center border bg-card text-card-foreground shadow-sm h-full max-h-[3rem] p-4 left-0 right-0 top-0",
      className
    )}
    {...props}
  >
    <Link className="hover:underline" href="/">
      Balder
    </Link>
    <div className="flex flex-row">
      <GMOrPlayerSwitch />
      <ThemeSwitch />
    </div>
  </div>
))
AppBar.displayName = "AppBar"

const NavRail = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "h-[calc(100vh)] w-full max-w-[12rem] border border-t-0 bg-card text-card-foreground shadow-sm p-4",
      className
    )}
    {...props}
  >
    <ol>
      <li>
        <Link className="hover:underline" href="/encounters">
          Encounters
        </Link>
      </li>
    </ol>
  </div>
))
NavRail.displayName = "NavRail"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <Providers>
          <AppBar />
          <div className="mt-[3rem] flex flex-row">
            <NavRail />
            <div className="container grid py-8">{children}</div>
          </div>
        </Providers>
      </body>
    </html>
  )
}
