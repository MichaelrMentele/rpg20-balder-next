"use client"
/**
 * Landing page for marketting.
 *
 * Links to the tutorial, app, demo, and login.
 */
import { useTheme } from "next-themes"
export default function Home() {
  const { theme, setTheme } = useTheme()
  return (
    <div>
      <h1 className="text-3xl text-pink-500" css={{ backgroundColor: "teal" }}>
        Welcome to Your App
      </h1>
    </div>
  )
}
