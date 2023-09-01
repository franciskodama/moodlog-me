import { DayObject } from '../lib/calendar';
import {
  CircleDashedIcon,
  MehIcon,
  Smile,
  LaughIcon,
  AnnoyedIcon,
  FrownIcon,
  AngryIcon,
  BedDoubleIcon,
  DumbbellIcon,
} from 'lucide-react';

const Cell = ({ day }: { day: DayObject }) => {
  // console.log('---  🚀 ---> | day:', day);
  return (
    <div
      className={`flex flex-col items-center justify-center h-20 w-20 border-2 border-primary rounded-lg text-primary font-bold ${
        day.weekend && 'bg-accent'
      }`}
    >
      <CircleDashedIcon className='h-8 w-8' strokeWidth='1.4px' />

      <p className='text-[10px]'>{day.month}</p>
      <p className='text-xs'>{day.monthDay}</p>
    </div>
  );
};
export default Cell;
