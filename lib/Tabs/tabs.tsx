/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState } from 'react';
import { TabsContextProps, TabsProps } from './types';

const TabsContext = createContext<TabsContextProps | null>(null);

const Tabs = ({ children, defaultValue, className, ...props }: React.ComponentProps<"div"> & TabsProps) => {
  const [activeTab, setActiveTab] = useState(defaultValue);

  return (
    <TabsContext.Provider value={{ activeTab, setActiveTab }}>
      <div className={className} {...props}>{children}</div>
    </TabsContext.Provider>
  )
}

function useTabsContext() {
  const ctx = useContext(TabsContext);
  if (!ctx) throw new Error("Tabs subcomponents must be used inside <Tabs>");
  return ctx;
}

export {
  Tabs,
  useTabsContext,
}