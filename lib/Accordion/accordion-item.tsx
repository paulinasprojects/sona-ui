import React from "react";
import { useAccordionContext } from "./accordion";
import { AccordionItemContext } from './accordion-item-context';
import { cn } from "../lib/utils";

interface AccordionItemProps extends React.HTMLAttributes<HTMLDivElement> {
  value: string;
}

const AccordionItem = ({ value, className, children, ...props }: AccordionItemProps) => {
  const { openItem } = useAccordionContext();
  const isOpen = openItem === value;

  return (
    <AccordionItemContext.Provider value={{ value, isOpen }}>
      <div
        data-state={isOpen ? "open" : "closed"}
        className={cn("p-2", className)}
        {...props}
      >
        {children}
      </div>
    </AccordionItemContext.Provider>
  );
};

export {
  AccordionItem
}