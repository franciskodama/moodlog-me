'use client';

import { useUser } from '@clerk/nextjs';
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
import {
  RadioGroupMeals,
  RadioGroupItemMeals,
} from '@/components/ui/radio-group-meals';
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
import { Button } from '@/ui/button';

import { moods } from '@/lib/data/moods';
import { setTodayData } from '@/lib/_actions';
import { useState } from 'react';
import { foodQualities } from '@/lib/data/food-quality';

type locationProps = {
  city: string;
  region: string;
  country: string;
  weather: string;
  moon: string;
};

const InteractionsPage = ({
  today,
  location,
  weather,
  moon,
}: {
  today: string;
  location: locationProps | null;
  weather: string;
  moon: string;
}) => {
  const [data, setData] = useState<FieldValues>({});
  const { user } = useUser();

  console.log('---  🚀 ---> | location:', location);
  console.log('---  🚀 ---> | today:', today);
  console.log('---  🚀 ---> | weather:', weather);
  console.log('---  🚀 ---> | moon:', moon);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm();

  const onSubmit = async () =>
    // formData: FieldValues
    {
      if (user) {
        setTodayData(
          user?.id,
          today
          // location,
          // weather,
          // moon
          // , formData
        );
      }
      // setData(formData);
      // reset();
    };

  return (
    <TooltipProvider>
      <div className='flex w-full mb-2 mt-1'>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className='flex w-full px-2 gap-8'
        >
          {/* ----------------------- INPUT FIELD ----------------------- */}

          <div className='flex flex-col w-1/4 mb-6 gap-6'>
            <div className='flex gap-2'>
              <Input
                {...register('note')}
                type='text'
                className='bg-white'
                placeholder='Leave a note for yourself'
              />
              <Tooltip>
                <TooltipTrigger>
                  <HelpCircleIcon
                    className='h-4 w-4 text-primary'
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

            <div className='flex flex-col justify-center gap-2 mr-8'>
              <RadioGroupEmojis className='flex justify-between ml-8 mb-2'>
                {moods.map((mood) => (
                  <div key={mood.id} className='flex items-center relative'>
                    <RadioGroupItemEmojis
                      {...register('moodRating')}
                      className='absolute t-0 l-0 translate-x-[2px] w-[2em] h-[2em]'
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
                          <p className='text-xs w-[20ch]'>{mood.description}</p>
                        </TooltipContent>
                      </Tooltip>
                    </Label>
                  </div>
                ))}
              </RadioGroupEmojis>

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
                  title='Sleep'
                  name='h'
                  className='cursor-pointer'
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
                  title='Meditation'
                  name='h'
                  className='cursor-pointer'
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
                  title='Workout'
                  name='h'
                  className='cursor-pointer'
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
                  title='Water'
                  name='liter'
                  className='cursor-pointer'
                  defaultValue={[0]}
                  max={3}
                  step={0.5}
                />
              </div>

              {/* ----------------------- MEALS ----------------------- */}

              <div className='flex'>
                <Tooltip>
                  <TooltipTrigger>
                    <AppleIcon className='h-6 w-6' strokeWidth='1.8px' />
                  </TooltipTrigger>
                  <TooltipContent className='text-xs ml-10 w-[20ch]'>
                    How would you rate the quality of your food today?
                  </TooltipContent>
                </Tooltip>

                <RadioGroupMeals className='flex'>
                  {foodQualities.map((quality) => (
                    <div
                      key={quality}
                      className='relative flex space-x-6 items-center'
                    >
                      <RadioGroupItemMeals
                        className='absolute t-0 l-0 translate-x-[26px] w-[5em] h-[2em]'
                        value={quality}
                        id={quality}
                      />
                      <Label
                        htmlFor={quality}
                        className='text-xs z-10 cursor-pointer'
                      >
                        {quality}
                      </Label>
                    </div>
                  ))}
                </RadioGroupMeals>
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
                  title='Tasks'
                  name=''
                  className='cursor-pointer'
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
              <div className='flex flex-col gap-4 w-full'>
                <Input
                  {...register('firstGratitude')}
                  type='text'
                  className='bg-white'
                  placeholder='First gratitude'
                />
                <Input
                  {...register('secondGratitude')}
                  type='text'
                  className='bg-white'
                  placeholder='Second gratitude'
                />
                <Input
                  {...register('thirdGratitude')}
                  type='text'
                  className='bg-white'
                  placeholder='Third gratitude'
                />
              </div>
              <Tooltip>
                <TooltipTrigger>
                  <HelpCircleIcon
                    className='h-4 w-4 text-primary ml-2'
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

            <h3 className='mt-10 mb-2 font-semibold'>
              Opportunities for growth today?
            </h3>
            <div className='flex w-full'>
              <div className='flex flex-col gap-4 w-full'>
                <Input
                  {...register('firstGrowthOpportunity')}
                  type='text'
                  className='bg-white'
                  placeholder='First improvement'
                />
                <Input
                  {...register('secondGrowthOpportunity')}
                  type='text'
                  className='bg-white'
                  placeholder='Second improvement'
                />
                <Input
                  {...register('thirdGrowthOpportunity')}
                  type='text'
                  className='bg-white'
                  placeholder='Third improvement'
                />
              </div>
              <Tooltip>
                <TooltipTrigger>
                  <HelpCircleIcon
                    className='h-4 w-4 text-primary ml-2'
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

          <div className='flex flex-col w-1/4 h-[28.5em] gap-4'>
            <Textarea
              {...register('reflections', {
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
            <div className='flex w-full gap-4'>
              <Button
                // disabled={isSubmitting}
                // type='submit'
                className='text-base w-full font-bold text-primary bg-blue border-2 border-primary rounded-full py-2 shadow-lg shadow-primary'
                // onClick={handleClickGetUsersDay}
              >
                SAVE DRAFT
                {/* GET USER */}
              </Button>

              <Button
                disabled={isSubmitting}
                type='submit'
                className='text-base w-full font-bold text-primary bg-yellow border-2 border-primary rounded-full py-2 shadow-lg shadow-primary'
              >
                SUBMIT DAY
              </Button>
            </div>
          </div>

          {/* ----------------------- 4th COLUMN ----------------------- */}

          <div className='w-1/4 h-[29em] pb-6 border-2 border-dashed border-primary rounded-xl'></div>

          {/* TODO: Statistics & Benchmarketing with other users  */}
          {/* TODO: Motivational phrases + Events celebrations + Badges  */}
          {/* TODO: Ads ig.: Better Help  */}
        </form>
      </div>
    </TooltipProvider>
  );
};
export default InteractionsPage;
