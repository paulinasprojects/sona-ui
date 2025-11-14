import React from "react";
import { useAccordionContext } from "./accordion";
import { cn } from "../lib/utils";
import ChevronDown from "../Icons/icons";
import { useAccordionItemContext } from "./accordion-item-context";


const AccordionTrigger = React.forwardRef<HTMLButtonElement, React.ButtonHTMLAttributes<HTMLButtonElement>>(
  ({ className, children, ...props }, ref) => {
    const { setOpenItem } = useAccordionContext();
    const { value, isOpen } = useAccordionItemContext();

    return (
      <button
        ref={ref}
        aria-expanded={isOpen}
        onClick={() => setOpenItem(isOpen ? null : value)}
        className={cn(
          "flex w-full items-center justify-between py-3 text-sm font-medium transition-all",
          className
        )}
        {...props}
      >
        {children}
        <span
          className={cn(
            "ml-2 inline-block transition-transform duration-200",
            isOpen ? "rotate-180" : "rotate-0"
          )}
        >
          <ChevronDown className="size-4" />
        </span>
      </button>
    );
  }
);

export {
  AccordionTrigger
}