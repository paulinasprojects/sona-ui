import { ButtonHTMLAttributes, HTMLAttributes } from "react";

export interface DialogContextValue {
  open: boolean;
  setOpen: (open: boolean) => void;
}

export interface DialogProps {
  children: React.ReactNode;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}

export interface DialogTriggerProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
}

export interface DialogContentProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  overlayClassName?: string;
}