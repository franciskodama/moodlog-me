import {
  MehIcon,
  SmileIcon,
  LaughIcon,
  FrownIcon,
  AngryIcon,
} from 'lucide-react';

export const moods = [
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

export const foodQualities = ['Poor', 'Fair', 'Good', 'Excellent'];
