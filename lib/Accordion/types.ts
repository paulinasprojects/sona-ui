export interface AccordionContextProps {
  openItem: string | null;
  setOpenItem: (value: string | null) => void;
}

export interface AccordionProps {
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string | null) => void;
  children: React.ReactNode;
  className?: string;
}