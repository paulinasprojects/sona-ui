import { Button } from "sona-ui";
import { Input } from "../lib/Input/input";
import { ArrowRight } from 'lucide-react'
import { ThemeProvider } from "./context/theme-provider";
import { ModeToggle } from "./components/theme-toggle";
import { Checkbox } from "../lib/Checkbox/checkbox";

function App() {
  return (
    <ThemeProvider defaultTheme='dark' storageKey='vite-ui-theme'>
      <div className="mt-5 ml-5 flex flex-col gap-10 max-sm:ml-0">
        <Button variant="primary" size={"default"}>
          <ArrowRight className="size-5" /> Button <ArrowRight className="size-5" />
        </Button>
        <Button variant="secondary" size={"default"}>
          <ArrowRight className="size-5" /> Button <ArrowRight className="size-5" />
        </Button>
        <Button variant="danger" size={"default"}>
          <ArrowRight className="size-5" /> Button <ArrowRight className="size-5" />
        </Button>
        <Button variant="outline" size={"default"}>
          <ArrowRight className="size-5" /> Button <ArrowRight className="size-5" />
        </Button>
        <Button variant="ghost" size={"default"}>
          <ArrowRight className="size-5" /> Button <ArrowRight className="size-5" />
        </Button>
        <Input placeholder='Search' />
        <Checkbox name="checkbox-name" />
        {/* <input type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm   dark:bg-gray-700 dark:border-gray-600 accent-secondary-foreground" /> */}
      </div>
      <div className="mt-20 ml-5">
        <ModeToggle />
      </div>
    </ThemeProvider>

  )
}

export default App
