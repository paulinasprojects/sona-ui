import { Moon, Sun } from "lucide-react"
import { useTheme } from "../context/theme-provider";


export function ModeToggle() {
  const { setTheme } = useTheme()

  return (
    <div className="flex gap-6">
      <button className="flex gap-4 bg-red-500 p-2 rounded-md" onClick={() => setTheme("dark")}>
        <Moon />
      </button>
      <button className="flex gap-4 bg-blue-500 p-2 rounded-md" onClick={() => setTheme("light")}>
        <Sun />
      </button>
    </div>
  )
}