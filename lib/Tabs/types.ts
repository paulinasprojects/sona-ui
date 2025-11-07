import { ButtonHTMLAttributes, HTMLAttributes } from "react";

export interface TabsContextProps {
  activeTab: string;
  setActiveTab: (value: string) => void;
}

export interface TabsProps {
  defaultValue: string;
  children: React.ReactNode;
  className?: string;
}

export interface TabsTriggerProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  value: string;
  children: React.ReactNode;
  className?: string;
}

export interface TabsListProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export interface TabsContentProps {
  value: string;
}