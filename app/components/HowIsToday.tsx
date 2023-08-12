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
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Progress } from '@/components/ui/progress';
import { Slider } from '@/components/ui/slider';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '@/components/ui/hover-card';

export const HowIsToday = () => {
  return (
    <TooltipProvider>
      <Accordion type='single' collapsible>
        <AccordionItem value='item-1' className='border-0'>
          <AccordionTrigger className='text-sm pl-2'>
            {questions[Math.floor(Math.random() * 10)]}
          </AccordionTrigger>
          <AccordionContent>
            <div className='flex w-full'>
              <form action='' className='flex w-full px-2 gap-8'>
                {/* ===================== 1 COL ===================== */}
                <div className='flex flex-col w-1/3 mb-6 gap-4'>
                  <Input
                    className='bg-white'
                    placeholder='Drop a line for yourself'
                  />
                  <div className='flex w-full justify-evenly'>
                    <RadioGroup defaultValue='bad' className='flex items'>
                      <div className='flex items-center space-x-2'>
                        <RadioGroupItem value='bad' id='bad' />
                        <Label htmlFor='bad'>
                          <Tooltip>
                            <TooltipTrigger>
                              <AngryIcon
                                className='h-8 w-8'
                                strokeWidth='1.4px'
                              />
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className='text-xs'>Angry</p>
                            </TooltipContent>
                          </Tooltip>
                        </Label>
                      </div>
                      <div className='flex items-center space-x-2'>
                        <RadioGroupItem value='regular' id='regular' />
                        <Label htmlFor='regular'>
                          <Tooltip>
                            <TooltipTrigger>
                              <FrownIcon
                                className='h-8 w-8'
                                strokeWidth='1.4px'
                              />
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className='text-xs'>Frown</p>
                            </TooltipContent>
                          </Tooltip>
                        </Label>
                      </div>
                      <div className='flex items-center space-x-2'>
                        <RadioGroupItem value='okay' id='okay' />
                        <Label htmlFor='okay'>
                          <Tooltip>
                            <TooltipTrigger>
                              <MehIcon
                                className='h-8 w-8'
                                strokeWidth='1.4px'
                              />
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className='text-xs'>Meh</p>
                            </TooltipContent>
                          </Tooltip>
                        </Label>
                      </div>
                      <div className='flex items-center space-x-2'>
                        <RadioGroupItem value='perfect' id='perfect' />
                        <Label htmlFor='perfect'>
                          <Tooltip>
                            <TooltipTrigger>
                              <SmileIcon
                                className='h-8 w-8'
                                strokeWidth='1.4px'
                              />
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className='text-xs'>Smile</p>
                            </TooltipContent>
                          </Tooltip>
                        </Label>
                      </div>
                      <div className='flex items-center space-x-2'>
                        <RadioGroupItem value='perfect' id='perfect' />
                        <Label htmlFor='perfect'>
                          <Tooltip>
                            <TooltipTrigger>
                              <LaughIcon
                                className='h-8 w-8'
                                strokeWidth='1.4px'
                              />
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className='text-xs'>Happy</p>
                            </TooltipContent>
                          </Tooltip>
                        </Label>
                      </div>
                    </RadioGroup>
                  </div>

                  {/* ======================== END SMILES ======================== */}

                  <div className='flex items-center gap-4'>
                    <Tooltip>
                      <TooltipTrigger>
                        <BedDoubleIcon
                          className='h-6 w-6'
                          strokeWidth='1.4px'
                        />
                      </TooltipTrigger>
                      <TooltipContent className='text-xs'>
                        How many hours did you sleep last night?
                      </TooltipContent>
                    </Tooltip>
                    <Slider
                      className='border border-primary bg-primary rounded cursor-pointer'
                      defaultValue={[7]}
                      max={10}
                      step={1}
                    />
                  </div>

                  <div className='flex items-center gap-4'>
                    <Tooltip>
                      <TooltipTrigger>
                        <DumbbellIcon className='h-6 w-6' strokeWidth='1.4px' />
                      </TooltipTrigger>
                      <TooltipContent className='text-xs'>
                        How long did you workout today?
                      </TooltipContent>
                    </Tooltip>
                    <Slider
                      className='border border-primary bg-primary rounded cursor-pointer'
                      defaultValue={[45]}
                      max={180}
                      step={15}
                    />
                  </div>

                  <div className='flex items-center gap-4'>
                    <Tooltip>
                      <TooltipTrigger>
                        <GlassWaterIcon
                          className='h-6 w-6'
                          strokeWidth='1.4px'
                        />
                      </TooltipTrigger>
                      <TooltipContent className='text-xs'>
                        How much water have you drank today?
                      </TooltipContent>
                    </Tooltip>
                    <Slider
                      className='border border-primary bg-primary rounded cursor-pointer'
                      defaultValue={[2]}
                      max={3}
                      step={0.5}
                    />
                  </div>

                  {/* ----------------------- MEALS ----------------------- */}

                  <div className='flex w-full items-center'>
                    <Tooltip>
                      <TooltipTrigger>
                        <AppleIcon className='h-6 w-6' strokeWidth='1.4px' />
                      </TooltipTrigger>
                      <TooltipContent className='text-xs'>
                        How healthy were your meals today?
                      </TooltipContent>
                    </Tooltip>
                    <RadioGroup
                      defaultValue='bad'
                      className='flex items-center w-full ml-4 gap-8'
                    >
                      <div className='flex items-center space-x-2'>
                        <RadioGroupItem value='bad' id='bad' />
                        <Label htmlFor='bad' className='text-xs'>
                          Bad
                        </Label>
                      </div>
                      <div className='flex items-center space-x-2'>
                        <RadioGroupItem value='regular' id='regular' />
                        <Label htmlFor='regular' className='text-xs'>
                          Regular
                        </Label>
                      </div>
                      <div className='flex items-center space-x-2'>
                        <RadioGroupItem value='okay' id='okay' />
                        <Label htmlFor='okay' className='text-xs'>
                          Okay
                        </Label>
                      </div>
                      <div className='flex items-center space-x-2'>
                        <RadioGroupItem value='perfect' id='perfect' />
                        <Label htmlFor='perfect' className='text-xs'>
                          Perfect
                        </Label>
                      </div>
                    </RadioGroup>
                  </div>

                  {/* ----------------------- TASKS ----------------------- */}

                  <div className='flex items-center gap-4'>
                    <Tooltip>
                      <TooltipTrigger>
                        <ListChecksIcon
                          className='h-6 w-6'
                          strokeWidth='1.4px'
                        />
                      </TooltipTrigger>
                      <TooltipContent className='text-xs'>
                        Have you acomplished your goals today?
                      </TooltipContent>
                    </Tooltip>
                    <Checkbox />
                  </div>

                  {/* ----------------------- PROGRESS ----------------------- */}

                  <Progress
                    value={33}
                    className='mt-4 border border-primary bg-secondary rounded'
                  />
                </div>
                {/* ===================== 2 COL ===================== */}

                <div className='w-1/3 h-full pb-6'>
                  <Textarea
                    className='w-full h-full pb-6 bg-white'
                    placeholder='Any thoughts?'
                  />
                </div>

                {/* ===================== 3 COL ===================== */}

                <div className='w-1/3 pb-6'>
                  <div className='w-full h-full rounded pl-4 border-2 border-secondary' />
                </div>
              </form>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </TooltipProvider>
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
