import { useComboboxContext } from './combobox';
import { cn } from '../lib/utils';
import { ComboboxOptionProps } from './types';

const ComboboxOption = ({ value, children, className, ...props }: React.HTMLAttributes<HTMLDivElement> & ComboboxOptionProps) => {
  const { setValue, value: selectedValue } = useComboboxContext();
  const isSelected = selectedValue === value;

  return (
    <div
      onClick={() => setValue(value)}
      className={cn(
        "px-3 py-2 text-sm cursor-pointer rounded-sm transition-colors mx-1 my-0.5",
        isSelected ? "bg-blue-500 text-white" : "text-gray-700 dark:text-gray-200 hover:bg-gray-10 dark:hover:bg-gray-800",
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}

export {
  ComboboxOption
}