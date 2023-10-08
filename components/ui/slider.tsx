'use client';

import * as React from 'react';
import * as SliderPrimitive from '@radix-ui/react-slider';

import { cn } from '@/lib/utils';

const Slider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>
>(({ className, ...props }, ref) => {
  // const value = props.value;

  // value must be used with
  // onValueChange={(value: number[]): void}
  // https://www.radix-ui.com/primitives/docs/components/slider

  return (
    <SliderPrimitive.Root
      ref={ref}
      className={cn(
        'relative flex w-full h-9 touch-none select-none items-center',
        className
      )}
      {...props}
    >
      <div className='absolute -top-1 left-10 text-xs text-primary tracking-wide'>{`${props.title}: ${props.value} ${props.name}`}</div>
      <SliderPrimitive.Track className='relative h-2 w-full border-[1.8px] grow overflow-hidden rounded-full bg-secondary border-1 border-primary shadow-sm shadow-primary'>
        <SliderPrimitive.Range className='absolute h-full bg-blue' />
      </SliderPrimitive.Track>
      <SliderPrimitive.Thumb
        className='block h-5 w-8 bg-yellow rounded-full border-[1.3px] border-primary shadow-sm shadow-primary
    ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50'
      />
    </SliderPrimitive.Root>
  );
});
Slider.displayName = SliderPrimitive.Root.displayName;

export { Slider };

// -----------ORIGINAL -----------

// const Slider = React.forwardRef<
//   React.ElementRef<typeof SliderPrimitive.Root>,
//   React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>
// >(({ className, ...props }, ref) => (
//   <SliderPrimitive.Root
//     ref={ref}
//     className={cn(
//       'relative flex w-full h-9 touch-none select-none items-center',
//       className
//     )}
//     {...props}
//   >
//     <div className='absolute -top-1 left-7 text-xs text-primary tracking-wide'>{`${props.title}: ${props.value} ${props.name}`}</div>
//     <SliderPrimitive.Track className='relative h-2 w-full border-[1.8px] grow overflow-hidden rounded-full bg-secondary border-1 border-primary shadow-sm shadow-primary'>
//       <SliderPrimitive.Range className='absolute h-full bg-blue' />
//     </SliderPrimitive.Track>
//     <SliderPrimitive.Thumb
//       className='block h-6 w-6 bg-yellow rounded-full border-[1.3px] border-primary shadow-sm shadow-primary
//     ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50'
//     />
//   </SliderPrimitive.Root>
// ));
// Slider.displayName = SliderPrimitive.Root.displayName;

// export { Slider };
