/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState } from "react";
import { ComboboxContextValue, ComboboxProps } from './types';

const ComboboxContext = createContext<ComboboxContextValue | null>(null);

const Combobox = ({ value, onValueChange, children, ...props }:
  React.HTMLAttributes<HTMLDivElement> & ComboboxProps) => {
  const [open, setOpen] = useState<boolean>(false);
  const [internalValue, setInternalValue] = useState<string | undefined>(value);
  const [query, setQuery] = useState("");

  const isControlled = value !== undefined;

  const currentValue = isControlled ? value : internalValue;

  const setValue = (value: string) => {
    if (!isControlled) setInternalValue(value);
    onValueChange?.(value);
    setOpen(false);
    setQuery("");
  };

  return (
    <ComboboxContext.Provider value={{ value: currentValue, setValue, open, setOpen, query, setQuery }}>
      <div className="relative w-full" {...props}>{children}</div>
    </ComboboxContext.Provider>
  )
}

function useComboboxContext() {
  const ctx = useContext(ComboboxContext);
  if (!ctx) throw new Error("Combobox subcomponents must be used inside <Combobox>")
  return ctx;
}

export {
  Combobox,
  useComboboxContext
}