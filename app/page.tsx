import { SignIn } from '@clerk/nextjs';
import { SparkleIcon, SparklesIcon } from 'lucide-react';
import { Luckiest_Guy, Pacifico } from 'next/font/google';

const luckiest_guy = Luckiest_Guy({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});

const pacifico = Pacifico({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});

const Home = () => {
  return (
    <>
      <div className='relative items-center flex mx-auto w-full h-[50em]'>
        {/* <SparklesIcon size={24} />
        <SparkleIcon size={24} /> */}

        <div className='w-2/3 mt-8'>
          <div className='w-[23em] ml-[14em] mb-[8em]'>
            <div className='relative text-6xl'>
              <h1
                className={`${pacifico.className} leading-[5rem] text-primary absolute top-1 left-1`}
              >
                Welcome to Moodlog.me!
              </h1>
              <h1
                className={`${pacifico.className} leading-[5rem] text-blue absolute top-0 left-0`}
              >
                Welcome to Moodlog.me!
              </h1>
            </div>

            <h2 className='inline-block text-lg mt-[10em]'>
              Where tracking your mood is a proactive step towards a happier
              you.
            </h2>
          </div>
        </div>

        <div className='w-1/3 self-center absolute right-0 top-[50%] translate-y-[-65%]'>
          <div>
            <div className='relative'>
              <SignIn
                signUpUrl='/sign-up'
                appearance={{
                  elements: {
                    card: 'bg-secondary shadow-none',
                    logoBox: 'hidden',
                    headerTitle:
                      'lowercase text-center font-semibold text-2xl mb-6',
                    headerSubtitle: 'hidden',
                    formButtonPrimary:
                      'bg-blue text-xl shadow-md shadow-primary rounded-full  hover:bg-yellow hover:text-primary',
                    formFieldInput:
                      'border-2 border-primary shadow-md shadow-primary h-[3.6em] rounded-full',
                    dividerLine: 'border border-primary',
                    dividerText: 'text-primary',
                    socialButtonsIconButton:
                      'border-2 border-primary shadow-md shadow-primary',
                    footerActionText: 'text-primary',
                    footerPagesLink: 'text-primary',
                  },
                }}
              />
              <div className='absolute top-0 left-0 w-8 h-[15em] bg-secondary' />
            </div>
          </div>
        </div>

        {/* <div className='p-10 text-white w-1/2'>
          <h1 className='mb-5 uppercase text-2xl'>About</h1>
          <p className='mb-5'>
            MoodLogMe is your personal emotional companion, empowering you to
            track, understand, and reflect on your moods effortlessly.
            Seamlessly integrated into your daily routine, this intuitive app
            helps you gain valuable insights into your emotional well-being and
            life patterns.
          </p>

          <ul>
            <h3 className='mb-5 uppercase text-2xl mt-20'>Key Features</h3>
            <li className='py-4'>
              <span className='uppercase text-lg'>
                Mood Tracking Made Simple:{' '}
              </span>
              <br />
              Capture your emotions in real-time with just a few taps. Choose
              from a diverse range of emotions or create custom entries to
              express exactly how you feel.
            </li>

            <li className='py-4'>
              <span className='uppercase text-lg'>
                Personalized Mood Journal:
              </span>
              Keep a detailed record of your moods over time. Our user-friendly
              interface allows you to view your mood history and trends at a
              glance.
            </li>

            <li className='py-4'>
              <span className='uppercase text-lg'>Insightful Analytics: </span>{' '}
              <br />
              Gain a deeper understanding of your emotional landscape through
              interactive charts and graphs. Discover patterns and correlations
              that you might have never noticed before.
            </li>
            <li className='py-4'>
              <span className='uppercase text-lg'>Custom Reminders: </span>{' '}
              <br />
              Set gentle reminders to log your moods regularly. Consistent
              tracking leads to more comprehensive insights into your emotional
              journey.
            </li>

            <li className='py-4'>
              <span className='uppercase text-lg'>Private and Secure:</span>{' '}
              <br />
              Safeguard your personal thoughts and emotions with end-to-end
              encryption. Your data is confidential, and you have complete
              control over your privacy settings.
            </li>

            <li className='py-4'>
              <span className='uppercase text-lg'> Mood Notes:</span> <br />
              Enhance your mood entries with personalized notes. Document the
              events, activities, or thoughts that influenced your emotions on
              any given day.
            </li>

            <li className='py-4'>
              <span className='uppercase text-lg'>Positive Habits:</span> <br />
              {`Establish healthy habits and reinforce positive emotions through
              the app's motivational features and goal-setting capabilities.`}
            </li>

            <li className='py-4'>
              <span className='uppercase text-lg'> Insights for Growth:</span>{' '}
              <br />
              Use MoodLogMe to identify potential stress triggers and develop
              coping mechanisms for a more balanced and fulfilling life.
            </li>
          </ul>
          <p>
            {`
        With moodlog.me, you'll be empowered to embrace emotional intelligence
        and gain a deeper connection with yourself. Start your journey of
        self-discovery today and unlock the potential for a happier and more
        meaningful life.
      `}
          </p>
        </div> */}
      </div>
    </>
  );
};
export default Home;

// const Home = () => {
//   return (
//     <>
//       <div className='flex'>
//         <div className='p-10 text-white w-1/2'>
//           <h1 className='mb-5 uppercase text-2xl'>About</h1>
//           <p className='mb-5'>
//             MoodLogMe is your personal emotional companion, empowering you to
//             track, understand, and reflect on your moods effortlessly.
//             Seamlessly integrated into your daily routine, this intuitive app
//             helps you gain valuable insights into your emotional well-being and
//             life patterns.
//           </p>

//           <ul>
//             <h3 className='mb-5 uppercase text-2xl mt-20'>Key Features</h3>
//             <li className='py-4'>
//               <span className='uppercase text-lg'>
//                 Mood Tracking Made Simple:{' '}
//               </span>
//               <br />
//               Capture your emotions in real-time with just a few taps. Choose
//               from a diverse range of emotions or create custom entries to
//               express exactly how you feel.
//             </li>

//             <li className='py-4'>
//               <span className='uppercase text-lg'>
//                 Personalized Mood Journal:
//               </span>
//               Keep a detailed record of your moods over time. Our user-friendly
//               interface allows you to view your mood history and trends at a
//               glance.
//             </li>

//             <li className='py-4'>
//               <span className='uppercase text-lg'>Insightful Analytics: </span>{' '}
//               <br />
//               Gain a deeper understanding of your emotional landscape through
//               interactive charts and graphs. Discover patterns and correlations
//               that you might have never noticed before.
//             </li>
//             <li className='py-4'>
//               <span className='uppercase text-lg'>Custom Reminders: </span>{' '}
//               <br />
//               Set gentle reminders to log your moods regularly. Consistent
//               tracking leads to more comprehensive insights into your emotional
//               journey.
//             </li>

//             <li className='py-4'>
//               <span className='uppercase text-lg'>Private and Secure:</span>{' '}
//               <br />
//               Safeguard your personal thoughts and emotions with end-to-end
//               encryption. Your data is confidential, and you have complete
//               control over your privacy settings.
//             </li>

//             <li className='py-4'>
//               <span className='uppercase text-lg'> Mood Notes:</span> <br />
//               Enhance your mood entries with personalized notes. Document the
//               events, activities, or thoughts that influenced your emotions on
//               any given day.
//             </li>

//             <li className='py-4'>
//               <span className='uppercase text-lg'>Positive Habits:</span> <br />
//               {`Establish healthy habits and reinforce positive emotions through
//               the app's motivational features and goal-setting capabilities.`}
//             </li>

//             <li className='py-4'>
//               <span className='uppercase text-lg'> Insights for Growth:</span>{' '}
//               <br />
//               Use MoodLogMe to identify potential stress triggers and develop
//               coping mechanisms for a more balanced and fulfilling life.
//             </li>
//           </ul>
//           <p>
//             {`
//         With moodlog.me, you'll be empowered to embrace emotional intelligence
//         and gain a deeper connection with yourself. Start your journey of
//         self-discovery today and unlock the potential for a happier and more
//         meaningful life.
//       `}
//           </p>
//         </div>
//         <div className='w-1/2 border-2 border-green-900 h-screen'>
//           {/* <div className='relative'> */}
//           Sign in
//           <SignIn
//             signUpUrl='/sign-up'
//             appearance={{
//               elements: {
//                 card: 'bg-white',
//                 logoBox: 'hidden',
//                 headerTitle:
//                   'uppercase text-center font-semibold text-2xl mb-6',
//                 headerSubtitle: 'hidden',
//                 formButtonPrimary: 'bg-primary text-xl',
//               },
//             }}
//           />
//           {/* <div className='absolute top-0 left-0 w-7 h-[15em] bg-primary' /> */}
//           {/* </div> */}
//         </div>
//       </div>
//     </>
//   );
// };
// export default Home;
