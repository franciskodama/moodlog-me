'use client';

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
  HelpCircleIcon,
} from 'lucide-react';
import { Label } from '@/components/ui/label';
import { Progress } from '@/components/ui/progress';
import { Slider } from '@/components/ui/slider';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import {
  RadioGroupEmojis,
  RadioGroupItemEmojis,
} from '@/components/ui/radio-group-emojis';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import createTodaysData from '@/lib/_actions';

const InteractionsPage = () => {
  const actionForDay = async (data: FormData) => {
    const phrase = data.get('phrase');
    if (!phrase || typeof phrase !== 'string') return;
    await createTodaysData(phrase);
  };

  return (
    <TooltipProvider>
      <div className='flex w-full'>
        <form action={actionForDay} className='flex w-full px-2 gap-8'>
          {/* ----------------------- INPUT FIELD ----------------------- */}

          <div className='flex flex-col w-1/3 mb-6 gap-6'>
            <div className='flex gap-2'>
              <Input
                type='text'
                name='phrase'
                className='bg-white'
                placeholder='Leave a note for yourself'
              />
              <button
                type='submit'
                className='border-2 border-primary rounded px-2'
              >
                SEND
              </button>
              <Tooltip>
                <TooltipTrigger>
                  <HelpCircleIcon
                    className='h-6 w-6 text-white'
                    strokeWidth='2px'
                  />
                </TooltipTrigger>
                <TooltipContent>
                  <p className='text-xs w-[20ch]'>
                    {`Capture a memorable moment from today in a single
                          phrase. Imagine you're leaving a note for your future
                          self, summarizing the essence of this day.`}
                  </p>
                </TooltipContent>
              </Tooltip>
            </div>

            {/* ----------------------- MOOD ----------------------- */}
            {/* Convert a radio to a button: https://flowbite.com/docs/forms/radio/ */}

            <div className='flex flex-col justify-center mx-auto gap-4 max-w-[27em]'>
              <div className='flex w-full justify-evenly'>
                <RadioGroupEmojis className='flex items'>
                  {moods.map((mood) => (
                    <div
                      key={mood.id}
                      className='flex items-center space-x-2 relative'
                    >
                      <RadioGroupItemEmojis
                        className='absolute t-0 l-0 translate-x-[10px] w-[2em] h-[2em]'
                        value={mood.id.toString()}
                        id={mood.id.toString()}
                      />
                      <Label htmlFor={mood.id.toString()}>
                        <Tooltip>
                          <TooltipTrigger>{mood.icon}</TooltipTrigger>
                          <TooltipContent>
                            <p className='text-base font-bold mb-1'>
                              {mood.title}
                            </p>
                            <p className='text-xs w-[20ch]'>
                              {mood.description}
                            </p>
                          </TooltipContent>
                        </Tooltip>
                      </Label>
                    </div>
                  ))}
                </RadioGroupEmojis>
              </div>

              {/* ----------------------- SLEEP ----------------------- */}

              <div className='flex items-center gap-4'>
                <Tooltip>
                  <TooltipTrigger>
                    <BedDoubleIcon className='h-6 w-6' strokeWidth='1.8px' />
                  </TooltipTrigger>
                  <TooltipContent className='text-xs ml-10 w-[20ch]'>
                    How many hours did you sleep last night?
                  </TooltipContent>
                </Tooltip>
                <Slider
                  className='border border-primary bg-primary rounded cursor-pointer'
                  defaultValue={[0]}
                  max={10}
                  step={1}
                />
              </div>

              {/* ----------------------- WORKOUT ----------------------- */}

              <div className='flex items-center gap-4'>
                <Tooltip>
                  <TooltipTrigger>
                    <DumbbellIcon className='h-6 w-6' strokeWidth='1.8px' />
                  </TooltipTrigger>
                  <TooltipContent className='text-xs ml-10 w-[20ch]'>
                    How long was your workout today?
                  </TooltipContent>
                </Tooltip>
                <Slider
                  className='border border-primary bg-primary rounded cursor-pointer'
                  defaultValue={[0]}
                  max={180}
                  step={15}
                />
              </div>

              {/* ----------------------- WATER ----------------------- */}

              <div className='flex items-center gap-4'>
                <Tooltip>
                  <TooltipTrigger>
                    <GlassWaterIcon className='h-6 w-6' strokeWidth='1.8px' />
                  </TooltipTrigger>
                  <TooltipContent className='text-xs ml-10 w-[20ch]'>
                    How many liters of water have you had today?
                  </TooltipContent>
                </Tooltip>
                <Slider
                  className='border border-primary bg-primary rounded cursor-pointer'
                  defaultValue={[0]}
                  max={3}
                  step={0.5}
                />
              </div>

              {/* ----------------------- MEALS ----------------------- */}

              <div className='flex w-full items-center'>
                <Tooltip>
                  <TooltipTrigger>
                    <AppleIcon className='h-6 w-6' strokeWidth='1.8px' />
                  </TooltipTrigger>
                  <TooltipContent className='text-xs ml-10 w-[20ch]'>
                    How would you rate the quality of your food today?
                  </TooltipContent>
                </Tooltip>

                <RadioGroup className='flex items-center justify-center w-full ml-4 gap-8'>
                  {foodQualities.map((quality) => (
                    <div
                      key={quality}
                      className='flex items-center space-x-2 relative'
                    >
                      <RadioGroupItem
                        className='absolute t-0 l-0 translate-x-[1px] h-[2.6em] border-2 rounded py-1 px-8 text-sm'
                        value={quality}
                        id={quality}
                      />
                      <Label htmlFor={quality} className='text-xs'>
                        {quality}
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
              </div>

              {/* ----------------------- TASKS ----------------------- */}

              <div className='flex items-center gap-4'>
                <Tooltip>
                  <TooltipTrigger>
                    <ListChecksIcon className='h-6 w-6' strokeWidth='1.8px' />
                  </TooltipTrigger>
                  <TooltipContent className='text-xs ml-10 w-[20ch]'>
                    What percentage of your goals and tasks did you accomplish
                    today? Slide the slider to indicate your achievement.
                  </TooltipContent>
                </Tooltip>
                <Slider
                  className='border border-primary bg-primary rounded cursor-pointer'
                  defaultValue={[0]}
                  max={100}
                  step={10}
                />
              </div>

              {/* ----------------------- PROGRESS ----------------------- */}

              <div className='pl-10'>
                <Progress
                  value={33}
                  className='mt-4 border border-primary bg-secondary rounded-lg'
                />
              </div>
            </div>
          </div>
          {/* ----------------------- NOTES ----------------------- */}

          <div className='w-1/3 h-full pb-6'>
            <Textarea
              className='w-full h-full pb-6 bg-white'
              placeholder='Any thoughts?'
            />
          </div>

          {/* ----------------------- 3rd COLUMN ----------------------- */}

          {/* TODO: Statistics & Benchmarketing with other users  */}
          {/* TODO: Motivational phrases + Events celebrations + Badges  */}
          {/* TODO: Ads ig.: Better Help  */}

          <div className='w-1/3 pb-6'>
            <div className='w-full h-full rounded pl-4 border-2 border-secondary' />
          </div>
        </form>
      </div>
    </TooltipProvider>
  );
};
export default InteractionsPage;

// Loiro server actions: https://www.youtube.com/watch?v=RadgkoJrhu0&list=WL&index=120
// To do app: https://www.youtube.com/watch?v=8e35eo447Zw

const moods = [
  {
    id: 1,
    title: 'Sunny Delight',
    description:
      "This mood captures the sunny side of life, radiating warmth and optimism. It's perfect for days when everything is going well and you're feeling cheerful.",
    icon: <AngryIcon className='h-8 w-8' strokeWidth='1.4px' />,
  },
  {
    id: 2,
    title: 'Whimsical Woe',
    description:
      "When things aren't going as planned but you can still find a bit of humor in the chaos. This mood embodies a quirky sense of resilience, perfect for those 'laugh through the tears' moments.",
    icon: <FrownIcon className='h-8 w-8' strokeWidth='1.4px' />,
  },
  {
    id: 3,
    title: 'Electric Storm',
    description:
      'For the turbulent days filled with intense emotions, frustration, and challenges. This mood represents the stormy weather within, allowing users to express their inner turmoil.',
    icon: <MehIcon className='h-8 w-8' strokeWidth='1.4px' />,
  },
  {
    id: 4,
    title: 'Cozy Respite',
    description:
      "When you're seeking solace and comfort on a tough day. This mood embraces the idea of finding refuge in simple pleasures and self-care, like a warm hug for the soul.",
    icon: <SmileIcon className='h-8 w-8' strokeWidth='1.4px' />,
  },
  {
    id: 5,
    title: 'Fiery Fury',
    description:
      "The ultimate outlet for those days when you're about to explode with anger or frustration. This mood lets users express their fiery emotions in a lighthearted way.",
    icon: <LaughIcon className='h-8 w-8' strokeWidth='1.4px' />,
  },
];

const foodQualities = ['Poor', 'Fair', 'Good', 'Excellent'];
