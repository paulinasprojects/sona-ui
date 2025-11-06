import { ButtonHTMLAttributes, HTMLAttributes } from "react";

export interface ComboboxContextValue {
  value?: string;
  setValue: (value: string) => void;
  open: boolean;
  setOpen: (open: boolean) => void;
  query: string;
  setQuery: (q: string) => void;
}

export interface ComboboxProps {
  value?: string;
  onValueChange: (value: string) => void;
  children: React.ReactNode
}

export interface ComboboxTriggerProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  placeholder?: string;
  className?: string;
}

export interface ComboboxContentProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}

export interface ComboboxInputProps extends HTMLAttributes<HTMLInputElement>  {
  placeholder?: string;
  className?: string;
}

export interface ComboboxListProps extends HTMLAttributes<HTMLDivElement>  {
  children: React.ReactNode;
}

export interface ComboboxOptionProps extends HTMLAttributes<HTMLDivElement>  {
  value: string;
  children: React.ReactNode;
  className?: string;
}