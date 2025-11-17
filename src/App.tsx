// import { Button } from "sona-ui";
// import { Input } from "../lib/Input/input";
// import { ArrowRight } from 'lucide-react'
import { ThemeProvider } from "./context/theme-provider";
import { ModeToggle } from "./components/theme-toggle";
// import { Textarea } from "../lib/Textarea/textarea";
// import { Label } from "sona-ui";
import { Pagination } from "../lib/Pagination/pagination";
// import { Checkbox } from "../lib/Checkbox/checkbox";
// import { Card } from '../lib/Card/card';
// import { CardHeader } from '../lib/Card/card-header';
// import { CardTitle } from '../lib/Card/card-title';
// import { CardDescription } from '../lib/Card/card-description';
// import { CardContent } from '../lib/Card/card-content';
// import { CardFooter } from '../lib/Card/card-footer';
// import { Tabs } from '../lib/Tabs/tabs';
// import { TabsTrigger } from '../lib/Tabs/tabs-trigger';
// import { TabsList } from '../lib/Tabs/tabs-list';
// import { TabsContent } from '../lib/Tabs/tabs-content';
// import { Pill, Select, SelectContent, SelectOption, SelectTrigger, } from "sona-ui";
// import {Tabs, TabsContent, TabsList, TabsTrigger} from 'sona-ui';
import { Dialog } from '../lib/Dialog/dialog';
import { DialogTrigger } from '../lib/Dialog/dialog-trigger';
import { DialogContent } from '../lib/Dialog/dialog-content';
import { DialogClose } from '../lib/Dialog/dialog-close';
// import { Accordion } from '../lib/Accordion/accordion';
// import { AccordionContent } from "../lib/Accordion/accordion-content";
// import { AccordionTrigger } from "../lib/Accordion/accordion-trigger";
// import { AccordionItem } from "../lib/Accordion/accordion-item";
// import { useState } from "react";
import { Button } from "sona-ui";

function App() {
  // const [value, setValue] = useState("");
  // const [open, setOpen] = useState(true);
  return (
    <ThemeProvider defaultTheme='dark' storageKey='vite-ui-theme'>
      <div className="mt-5 flex gap-4">
        <div className="ml-5">
          <ModeToggle />
        </div>
        <div className="flex gap-5">
          {/* <Tabs defaultValue="account">
            <TabsList>
              <TabsTrigger value="account">Account</TabsTrigger>
              <TabsTrigger value="profile">Profile</TabsTrigger>
              <TabsTrigger value="theme">Theme</TabsTrigger>
            </TabsList>
            <TabsContent value="account">Account content</TabsContent>
            <TabsContent value="profile">Profile content</TabsContent>
            <TabsContent value="theme">Theme content</TabsContent>
          </Tabs> */}
          {/* <Pill label="Pill label" variant="danger" size="small" />
          <Select value={value} onValueChange={setValue}>
            <SelectTrigger placeholder='Choose option' className="w-[180px]" />
            <SelectContent>
              <SelectOption value='Option 1'>Option 1</SelectOption>
              <SelectOption value='Option 2'>Option 2</SelectOption>
            </SelectContent>
          </Select> */}
          <Dialog>
            <DialogTrigger>Open dialog</DialogTrigger>
            <DialogContent>This action cannot be undone. This will permanently delete your account
              and remove your data from our servers.
              <div className="flex gap-5">
                <DialogClose>Close</DialogClose>
                <Button>Save changes</Button>
              </div>
            </DialogContent>
          </Dialog>
          {/* <Accordion defaultValue="item-2" className="w-[550px]">
            <AccordionItem value="item-1">
              <AccordionTrigger>What is your return policy?</AccordionTrigger>
              <AccordionContent>
                You can return any item within 30 days of purchase.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger>How do I contact support?</AccordionTrigger>
              <AccordionContent>
                You can reach our support team via email or live chat.
              </AccordionContent>
            </AccordionItem>
          </Accordion> */}
        </div>
      </div>
      {/* <Alert variant="danger" className="mt-5">
        <div className="flex items-center gap-4">
          <CloseIcon className="size-4 " />
          <span> Please verify your billing information and try again.</span>
        </div>
      </Alert> */}
      {/* <div className="mt-5">

        <Pagination currentPage={1} setCurrentPage={() => { }} totalPages={10} />
      </div> */}
    </ThemeProvider>

  )
}

export default App
