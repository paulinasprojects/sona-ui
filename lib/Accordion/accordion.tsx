/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useContext, useState } from 'react';
import { AccordionContextProps, AccordionProps } from './types';

const AccordionContext = createContext<AccordionContextProps | null>(null);

const Accordion = ({ value, defaultValue, onValueChange, children, className, ...props }: React.ComponentProps<"div"> & AccordionProps) => {
  const [internalValue, setInternalValue] = useState<string | null>(defaultValue || null);
  const isControlled = value !== undefined;
  const openItem = isControlled ? value : internalValue;

  const setOpenItem = (value: string | null) => {
    if (!isControlled) setInternalValue(value);
    onValueChange?.(value);
  };

  return (
    <AccordionContext.Provider value={{ openItem, setOpenItem }}>
      <div className={className} {...props}>{children}</div>
    </AccordionContext.Provider>
  )
}

function useAccordionContext() {
  const ctx = useContext(AccordionContext);
  if (!ctx) throw new Error("Accordion subcomponents must be used inside <Accordion>");
  return ctx;
}

export {
  Accordion,
  useAccordionContext
};