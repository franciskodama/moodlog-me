'use client';

import {
  BedDoubleIcon,
  DumbbellIcon,
  AppleIcon,
  GlassWaterIcon,
  ListChecksIcon,
  HelpCircleIcon,
  SparklesIcon,
} from 'lucide-react';
import { useForm } from 'react-hook-form';
import type { FieldValues } from 'react-hook-form';

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
import { moods, foodQualities } from '@/lib/data-day';
import { Button } from '@/ui/button';

const InteractionsPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm();

  const onSubmit = async (data: FieldValues) => {
    console.log('---  🚀 ---> | data:', data);
    await createTodaysData(data);
    // await new Promise((resolve) => XXX)
    reset();
  };

  // const actionForDay = async (data: FormData) => {
  //   const phrase = data.get('phrase');
  //   if (!phrase || typeof phrase !== 'string') return;
  //   await createTodaysData(phrase);
  // };

  return (
    <TooltipProvider>
      <div className='flex w-full mb-10'>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className='flex w-full px-2 gap-8'
        >
          {/* ----------------------- INPUT FIELD ----------------------- */}

          <div className='flex flex-col w-1/4 mb-6 gap-6'>
            <div className='flex gap-2'>
              <Input
                {...register('phrase')}
                type='text'
                className='bg-white ml-14'
                placeholder='Leave a note for yourself'
              />
              <Tooltip>
                <TooltipTrigger>
                  <HelpCircleIcon
                    className='h-6 w-6 text-primary'
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
                        {...register('mood')}
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

              {/* ----------------------- MEDITATION ----------------------- */}

              <div className='flex items-center gap-4'>
                <Tooltip>
                  <TooltipTrigger>
                    <SparklesIcon className='h-6 w-6' strokeWidth='1.8px' />
                  </TooltipTrigger>
                  <TooltipContent className='text-xs ml-10 w-[20ch]'>
                    For how long did you meditate?
                  </TooltipContent>
                </Tooltip>
                <Slider
                  className='border border-primary bg-primary rounded cursor-pointer'
                  defaultValue={[0]}
                  max={60}
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
                        className='absolute t-0 l-0 translate-x-[1px] h-[2.6em] shadow-md shadow-primary border-2 rounded-full py-1 px-8 text-sm'
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
            </div>
          </div>

          {/* ----------------------- 3 GRATEFULL ----------------------- */}

          <div className='w-1/4 h-full'>
            <h3 className='mb-2 font-semibold'>
              What brought a smile to your face today?
            </h3>
            <div className='flex w-full'>
              <div className='flex flex-col gap-2 w-full'>
                <Input
                  {...register('gratitude-one')}
                  type='text'
                  className='bg-white'
                  placeholder='First gratitude'
                />
                <Input
                  {...register('gratitude-second')}
                  type='text'
                  className='bg-white'
                  placeholder='Second gratitude'
                />
                <Input
                  {...register('gratitude-third')}
                  type='text'
                  className='bg-white'
                  placeholder='Third gratitude'
                />
              </div>
              <Tooltip>
                <TooltipTrigger>
                  <HelpCircleIcon
                    className='h-6 w-6 text-primary ml-2'
                    strokeWidth='2px'
                  />
                </TooltipTrigger>
                <TooltipContent>
                  <p className='text-xs w-[20ch]'>
                    {`Three Good Things (Gratitude): Each day, note three positive moments, achievements, or interactions that brought joy. Reflect on their significance.`}
                  </p>
                </TooltipContent>
              </Tooltip>
            </div>

            {/* ----------------------- 3 CCOULD BE BETTER ----------------------- */}

            <h3 className='mt-6 mb-2 font-semibold'>
              Opportunities for growth today?
            </h3>
            <div className='flex w-full'>
              <div className='flex flex-col gap-2 w-full'>
                <Input
                  {...register('improvement-one')}
                  type='text'
                  className='bg-white'
                  placeholder='First improvement'
                />
                <Input
                  {...register('improvement-second')}
                  type='text'
                  className='bg-white'
                  placeholder='Second improvement'
                />
                <Input
                  {...register('improvement-third')}
                  type='text'
                  className='bg-white'
                  placeholder='Third improvement'
                />
              </div>
              <Tooltip>
                <TooltipTrigger>
                  <HelpCircleIcon
                    className='h-6 w-6 text-primary ml-2'
                    strokeWidth='2px'
                  />
                </TooltipTrigger>
                <TooltipContent>
                  <p className='text-xs w-[20ch]'>
                    {`Three Areas to Improve: Reflect on three opportunities for growth today. These could be challenges, mistakes, or moments where you can learn and do better.`}
                  </p>
                </TooltipContent>
              </Tooltip>
            </div>
          </div>

          {/* ----------------------- NOTES ----------------------- */}

          <div className='flex flex-col w-1/4 h-full gap-4'>
            <Textarea
              {...register('thoughts', {
                minLength: {
                  value: 10,
                  message: `C'mon, you can write more than 10 characteres, right?`,
                },
              })}
              className='w-full h-full bg-white'
              placeholder='Any thoughts?'
            />

            {/* ----------------------- PROGRESS ----------------------- */}

            <div className=''>
              <Progress
                value={33}
                className='border border-primary bg-secondary rounded-lg'
              />
            </div>

            {/* ----------------------- BUTTOM SUBMIT ----------------------- */}

            <Button
              disabled={isSubmitting}
              type='submit'
              className='text-base font-bold text-primary bg-accent border-2 border-primary rounded-full py-2 shadow-lg shadow-primary'
            >
              {/* box-shadow: 0.5rem 0.5rem black; */}
              SAVE DRAFT
            </Button>
          </div>

          {/* ----------------------- 4th COLUMN ----------------------- */}

          <div className='w-1/4 h-full pb-6 border-2 border-dashed border-primary rounded-xl'></div>

          {/* TODO: Statistics & Benchmarketing with other users  */}
          {/* TODO: Motivational phrases + Events celebrations + Badges  */}
          {/* TODO: Ads ig.: Better Help  */}
        </form>
      </div>
    </TooltipProvider>
  );
};
export default InteractionsPage;
