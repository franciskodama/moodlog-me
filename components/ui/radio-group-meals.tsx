'use client';

import * as React from 'react';
import * as RadioGroupPrimitive from '@radix-ui/react-radio-group';
import { Circle } from 'lucide-react';

import { cn } from '@/lib/utils';

const RadioGroupMeals = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root>
>(({ className, ...props }, ref) => {
  return (
    <RadioGroupPrimitive.Root
      className={cn('grid gap-1', className)}
      {...props}
      ref={ref}
    />
  );
});
RadioGroupMeals.displayName = RadioGroupPrimitive.Root.displayName;

const RadioGroupItemMeals = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item>
>(({ className, children, ...props }, ref) => {
  return (
    <RadioGroupPrimitive.Item
      ref={ref}
      className={cn(
        'aspect-square h-4 w-4 rounded-full text-primary ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
        className
      )}
      {...props}
    >
      <RadioGroupPrimitive.Indicator>
        <div
          className='h-6 w-12 rounded-full -translate-x-2 -translate-y-[1px] border-2 border-primary border-dashed bg-yellow'
          style={{
            width:
              props.value === 'Excellent'
                ? '4.8em'
                : props.value === 'Good'
                ? '3.2em'
                : '2.8em',
          }}
        />
      </RadioGroupPrimitive.Indicator>
    </RadioGroupPrimitive.Item>
  );
});
RadioGroupItemMeals.displayName = RadioGroupPrimitive.Item.displayName;

export { RadioGroupMeals, RadioGroupItemMeals };
