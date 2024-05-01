import * as React from 'react';

import { cn } from '@/lib/utils';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  setInputValue?: (value: string) => void;
  dropdownVisible?: boolean;
  setDropdownVisible?: (visible: boolean) => void;
  options?: string[];
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(({ className, type, list, options, setInputValue, dropdownVisible, setDropdownVisible, ...props }, ref) => {
  return (
    <div className="relative">
      <input
        type={type}
        className={cn(
          'flex h-9 w-full rounded-md border border-zinc-200 bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-zinc-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-950 disabled:cursor-not-allowed disabled:opacity-50 dark:border-zinc-800 dark:placeholder:text-zinc-400 dark:focus-visible:ring-zinc-300',
          className
        )}
        ref={ref}
        {...props}
      />

      {dropdownVisible && list && options && options.length > 0 && props.value && (
        <div className="bg-[#182D32] border border-input_border flex flex-col text-zinc-400 rounded mt-2 absolute top-12 w-full" id={list}>
          {options.map((option: string, index: React.Key | null | undefined) => (
            <span
              onClick={() => {
                if (setInputValue && setDropdownVisible) {
                  setInputValue(option);
                  setDropdownVisible(false);
                }
              }}
              key={index}
              className="p-3 cursor-pointer hover:text-white"
            >
              {option}
            </span>
          ))}
        </div>
      )}
    </div>
  );
});
Input.displayName = 'Input';

export { Input };
