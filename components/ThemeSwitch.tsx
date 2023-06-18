"use client"

import { useTheme } from "next-themes"

export default function ThemeSwitch() {
  const { theme, setTheme } = useTheme()

  return (
    <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
      Dark Mode Toggle
    </button>
  )
}
