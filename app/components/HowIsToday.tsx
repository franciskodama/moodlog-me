import {
  MehIcon,
  SmileIcon,
  LaughIcon,
  FrownIcon,
  AngryIcon,
  BedDoubleIcon,
  DumbbellIcon,
  AppleIcon,
  GlassWaterIcon,
  ListChecksIcon,
} from 'lucide-react';

export const HowIsToday = () => {
  return (
    <div className='flex w-full'>
      <form action='' className='flex w-full px-2 gap-8'>
        {/* ===================== 1 COL ===================== */}
        <div className='flex flex-col w-1/3 mb-6 gap-4'>
          <input
            className='w-full h-10 rounded pl-4'
            placeholder={questions[Math.floor(Math.random() * 10)]}
          />

          <div className='flex items-center gap-4'>
            {/* <h3 className='text-sm'>mood:</h3> */}
            <AngryIcon className='h-8 w-8' strokeWidth='1.4px' />
            <FrownIcon className='h-8 w-8' strokeWidth='1.4px' />
            <MehIcon className='h-8 w-8' strokeWidth='1.4px' />
            <SmileIcon className='h-8 w-8' strokeWidth='1.4px' />
            <LaughIcon className='h-8 w-8' strokeWidth='1.4px' />
          </div>

          <div className='flex items-center gap-4'>
            {/* <h3 className='text-sm'>sleep:</h3> */}
            <BedDoubleIcon className='h-8 w-8' strokeWidth='1.4px' />
            <input
              type='checkbox'
              className='w-full h-10 rounded pl-4'
              placeholder='How many hours of sleep?'
            />
            {/* <input
            className='w-full h-10 rounded pl-4'
            placeholder='How many hours of sleep?'
          /> */}
          </div>

          <div className='flex items-center gap-4'>
            {/* <h3 className='text-sm'>workout:</h3> */}
            <DumbbellIcon className='h-8 w-8' strokeWidth='1.4px' />
            <input
              type='checkbox'
              className='w-full h-10 rounded pl-4'
              placeholder='How many hours of sleep?'
            />
          </div>

          <div className='flex items-center gap-4'>
            {/* <h3 className='text-sm'>workout:</h3> */}
            <AppleIcon className='h-8 w-8' strokeWidth='1.4px' />
            <input
              type='checkbox'
              className='w-full h-10 rounded pl-4'
              placeholder='How many hours of sleep?'
            />
          </div>

          <div className='flex items-center gap-4'>
            {/* <h3 className='text-sm'>workout:</h3> */}
            <GlassWaterIcon className='h-8 w-8' strokeWidth='1.4px' />
            <input
              type='checkbox'
              className='w-full h-10 rounded pl-4'
              placeholder='How many hours of sleep?'
            />
          </div>

          <div className='flex items-center gap-4'>
            {/* <h3 className='text-sm'>workout:</h3> */}
            <ListChecksIcon className='h-8 w-8' strokeWidth='1.4px' />
            <input
              type='checkbox'
              className='w-full h-10 rounded pl-4'
              placeholder='How many hours of sleep?'
            />
          </div>

          <div className='flex items-center h-10 border-2 border-secondary rounded'>
            <div className='pl-4'>0%</div>
          </div>
        </div>
        {/* ===================== 2 COL ===================== */}

        <div className='w-1/3 h-full pb-6'>
          <input
            className='w-full h-full rounded pl-4'
            placeholder='Any thoughts?'
          />
        </div>

        {/* ===================== 3 COL ===================== */}

        <div className='w-1/3 pb-6'>
          <div className='w-full h-full rounded pl-4 border-2 border-secondary' />
        </div>
      </form>
    </div>
  );
};

// Loiro server actions: https://www.youtube.com/watch?v=RadgkoJrhu0&list=WL&index=120
// To do app: https://www.youtube.com/watch?v=8e35eo447Zw

const questions = [
  'How are you doing today?',
  "How's your day going so far?",
  "How's everything treating you today?",
  "How's your day been treating you?",
  "How's your day unfolding?",
  'How are things going for you today?',
  "How's your day shaping up?",
  "How's your day progressing?",
  "How's your day panning out?",
  "How's your day treating you thus far?",
  "How's your day looking?",
];
