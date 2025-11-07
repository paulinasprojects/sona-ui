// import { Button } from "sona-ui";
// import { Input } from "../lib/Input/input";
// import { ArrowRight } from 'lucide-react'
import { ThemeProvider } from "./context/theme-provider";
import { ModeToggle } from "./components/theme-toggle";
// import { Checkbox } from "../lib/Checkbox/checkbox";
// import { Card } from '../lib/Card/card';
// import { CardHeader } from '../lib/Card/card-header';
// import { CardTitle } from '../lib/Card/card-title';
// import { CardDescription } from '../lib/Card/card-description';
// import { CardContent } from '../lib/Card/card-content';
// import { CardFooter } from '../lib/Card/card-footer';
import { Tabs } from '../lib/Tabs/tabs';
import { TabsTrigger } from '../lib/Tabs/tabs-trigger';
import { TabsList } from '../lib/Tabs/tabs-list';
import { TabsContent } from '../lib/Tabs/tabs-content';

function App() {
  return (
    <ThemeProvider defaultTheme='dark' storageKey='vite-ui-theme'>
      <div className="mt-5 flex gap-4">
        <div className="ml-5">
          <ModeToggle />
        </div>
        <div>
          <Tabs defaultValue="account">
            <TabsList>
              <TabsTrigger value="account">Account</TabsTrigger>
              <TabsTrigger value="profile">Profile</TabsTrigger>
              <TabsTrigger value="theme">Theme</TabsTrigger>
            </TabsList>
            <TabsContent value="account">Account content</TabsContent>
            <TabsContent value="profile">Profile content</TabsContent>
            <TabsContent value="theme">Theme content</TabsContent>
          </Tabs>
        </div>
      </div>
    </ThemeProvider>

  )
}

export default App
