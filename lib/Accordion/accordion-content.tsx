import React, { useEffect } from "react";
import { useAccordionItemContext } from './accordion-item-context';
import { cn } from "../lib/utils";

const AccordionContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, children, ...props }, ref) => {
    const { isOpen } = useAccordionItemContext();
    const contentRef = React.useRef<HTMLDivElement>(null);
    const [height, setHeight] = React.useState<number>(0);

    useEffect(() => {
      if (contentRef.current) {
        setHeight(contentRef.current.scrollHeight);
      }
    }, [children, isOpen]);

    return (
      <div
        ref={ref}
        aria-hidden={!isOpen}
        className={cn(
          "overflow-hidden transition-[max-height,opacity] duration-300 ease-in-out",
          isOpen ? "opacity-100" : "opacity-0",
          className
        )}
        style={{
          maxHeight: isOpen ? `${height}px` : "0px",
        }}
        {...props}
      >
        <div ref={contentRef} className="py-2 text-sm text-muted-foreground">
          {children}
        </div>
      </div>
    );
  }
);

export {
  AccordionContent
}