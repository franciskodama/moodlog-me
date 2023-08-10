import { DayObject } from '../lib/calendar';
import {
  CircleDashed,
  Meh,
  Smile,
  Laugh,
  Annoyed,
  Frown,
  Angry,
} from 'lucide-react';

const Cell = ({ day }: DayObject) => {
  console.log('---  🚀 ---> | day:', day);
  return (
    <>
      <div
        className={`flex flex-col items-center justify-center h-20 w-20 border-2 border-secondary rounded ${
          day.weekend && 'bg-yellow-500'
        }`}
      >
        {/* <div className='text-3xl'>🤪</div> */}
        {/* <Annoyed  className='h-8 w-8' strokeWidth='1.4px'  />
        <Angry  className='h-8 w-8' strokeWidth='1.4px' />
        <Frown  className='h-8 w-8' strokeWidth='1.4px'  />
        <Annoyed  className='h-8 w-8' strokeWidth='1.4px'  />
        <Laugh  className='h-8 w-8' strokeWidth='1.4px' /> */}
        {/* <Meh  className='h-8 w-8' strokeWidth='1.4px'  /> */}
        {/* <Smile className='h-8 w-8' strokeWidth='1.4px' /> */}
        <CircleDashed className='h-8 w-8' strokeWidth='1.4px' />

        <p className='text-secondary font-bold text-[10px]'>{day.month}</p>
        <p className='text-secondary font-bold text-xs'>{day.monthDay}</p>
        {/* <p className='text-white font-normal text-xs'>{day.weekDay}</p> */}
      </div>
    </>
  );
};
export default Cell;
