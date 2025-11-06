/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import { ComboboxListProps } from './types';
import { useComboboxContext } from "./combobox";

const ComboboxList = React.forwardRef<HTMLDivElement, ComboboxListProps>(
  ({ children, ...props }, ref) => {

    const { query } = useComboboxContext();

    const filtered = React.Children.toArray(children).filter((child: any) => {
      if (typeof child.props.children !== "string") return true;
      return child.props.children.toLowerCase().includes(query.toLowerCase());
    });

    return (
      <div
        className='max-h-56 overflow-auto'
        {...props}
        ref={ref}
      >
        {filtered}
      </div>
    )
  }
)

export { ComboboxList }