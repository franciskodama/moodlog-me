export const HowIsToday = () => {
  return (
    <div className='flex px-2 mb-6 gap-4'>
      <form action='' className='w-1/2'>
        <input
          className='w-full h-10 rounded pl-4'
          placeholder={questions[Math.floor(Math.random() * 10)]}
        />
      </form>
      <div className='flex items-center w-1/2 h-10 border-2 border-secondary rounded'>
        <div className='pl-4'>0%</div>
      </div>
    </div>
  );
};

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
