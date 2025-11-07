import { Button } from "sona-ui";
// import { Input } from "../lib/Input/input";
// import { ArrowRight } from 'lucide-react'
import { ThemeProvider } from "./context/theme-provider";
import { ModeToggle } from "./components/theme-toggle";
// import { Checkbox } from "../lib/Checkbox/checkbox";
import { Card } from '../lib/Card/card';
import { CardHeader } from '../lib/Card/card-header';
import { CardTitle } from '../lib/Card/card-title';
import { CardDescription } from '../lib/Card/card-description';
import { CardContent } from '../lib/Card/card-content';
import { CardFooter } from '../lib/Card/card-footer';

function App() {
  return (
    <ThemeProvider defaultTheme='dark' storageKey='vite-ui-theme'>
      <div className="mt-5 flex gap-4">
        <div className="ml-5">
          <ModeToggle />
        </div>
        <div>
          <Card className="w-[520px] max-md:w-[400px] max-sm:w-full">
            <CardHeader>
              <CardTitle>Sign up now</CardTitle>
              <CardDescription>Create an account for our platform</CardDescription>
            </CardHeader>
            <CardContent>
              Card content here
            </CardContent>
            <CardFooter>
              <Button variant={"outline"} className='w-full'>
                Sign up
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </ThemeProvider>

  )
}

export default App
