import { createContext, useContext } from 'react';

interface AccordionItemContextProps {
  value: string;
  isOpen: boolean;
}

export const AccordionItemContext = createContext<AccordionItemContextProps | null>(null);

export const useAccordionItemContext = () => {
  const ctx = useContext(AccordionItemContext);
  if (!ctx) throw new Error("AccordionItem subcomponents must be inside <AccordionItem>");
  return ctx;
}