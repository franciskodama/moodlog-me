import { useUser } from '@clerk/nextjs';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import InteractionsPage from './interactions';
import { StarIcon } from 'lucide-react';
import { auth } from '@clerk/nextjs';
import { getDay } from '@/lib/day.server';

export const HowIsToday = async () => {
  const user = auth();

  // if (user.userId) {
  //   const dayTest = await getDay(user.userId!);
  //   console.log('---  🚀 ---> | dayTest:', dayTest);
  // }

  return (
    <Accordion type='single' collapsible>
      <AccordionItem value='item-1' className='border-0'>
        <AccordionTrigger className='text-lg font-bold pl-2 border-2 border-primary shadow-md shadow-primary bg-blue px-6 rounded-full py-2 mb-12 mx-2'>
          <div className='flex items-center'>
            <div className='mr-2'>
              <StarIcon fill='#ffdc02' />
            </div>
            {questions[Math.floor(Math.random() * 10)]}
          </div>
        </AccordionTrigger>
        <AccordionContent>
          <InteractionsPage />
        </AccordionContent>
      </AccordionItem>
    </Accordion>
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
