"use client"

import { useTheme } from "next-themes"
import { Button } from "./ui/button"
import { Moon } from "lucide-react"

export default function ThemeSwitch() {
  const { theme, setTheme } = useTheme()

  return (
    <Button
      variant="ghost"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      <Moon />
    </Button>
  )
}
