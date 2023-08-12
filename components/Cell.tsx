import { DayObject } from '../app/lib/calendar';
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
      className={`flex flex-col items-center justify-center h-20 w-20 border-2 border-primary rounded text-primary font-bold ${
        day.weekend && 'bg-yellow-500'
      }`}
    >
      <CircleDashedIcon className='h-8 w-8' strokeWidth='1.4px' />

      <p className='text-[10px]'>{day.month}</p>
      <p className='text-xs'>{day.monthDay}</p>
    </div>
  );
};
export default Cell;
