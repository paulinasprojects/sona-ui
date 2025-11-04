import { Button } from "sona-ui";
import { Input } from "../lib/Input/input";
import { ArrowRight } from 'lucide-react'
import { ThemeProvider } from "./context/theme-provider";
import { ModeToggle } from "./components/theme-toggle";

function App() {
  return (
    <ThemeProvider defaultTheme='dark' storageKey='vite-ui-theme'>
      <div className="mt-5 ml-5 flex gap-4 max-sm:flex-col max-sm:ml-0">
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
      </div>
      <div className="mt-96 ml-5">
        <ModeToggle />
      </div>
    </ThemeProvider>

  )
}

export default App
