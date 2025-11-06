// import { Button } from "sona-ui";
// import { Input } from "../lib/Input/input";
// import { ArrowRight } from 'lucide-react'
import { ThemeProvider } from "./context/theme-provider";
import { ModeToggle } from "./components/theme-toggle";
// import { Checkbox } from "../lib/Checkbox/checkbox";

function App() {

  return (
    <ThemeProvider defaultTheme='dark' storageKey='vite-ui-theme'>
      <div className="mt-5 flex gap-4">
        <div className="ml-5">
          <ModeToggle />
        </div>
        <div>

        </div>
      </div>
    </ThemeProvider>

  )
}

export default App
