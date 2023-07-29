import Link from 'next/link';

const Home = () => {
  return (
    <>
      <h1 className='mb-5'>Hi to MoodLog.me</h1>
      <p className='mb-5'>
        MoodLogMe is your personal emotional companion, empowering you to track,
        understand, and reflect on your moods effortlessly. Seamlessly
        integrated into your daily routine, this intuitive app helps you gain
        valuable insights into your emotional well-being and life patterns.
      </p>

      <Link href='sign-in'>
        <p>Sign in </p>
      </Link>

      <h3>Key Features</h3>
      <ul>
        <li>
          Mood Tracking Made Simple: Capture your emotions in real-time with
          just a few taps. Choose from a diverse range of emotions or create
          custom entries to express exactly how you feel.
        </li>

        <li>
          Personalized Mood Journal: Keep a detailed record of your moods over
          time. Our user-friendly interface allows you to view your mood history
          and trends at a glance.
        </li>

        <li>
          Insightful Analytics: Gain a deeper understanding of your emotional
          landscape through interactive charts and graphs. Discover patterns and
          correlations that you might have never noticed before.
        </li>
        <li>
          Custom Reminders: Set gentle reminders to log your moods regularly.
          Consistent tracking leads to more comprehensive insights into your
          emotional journey.
        </li>

        <li>
          Private and Secure: Safeguard your personal thoughts and emotions with
          end-to-end encryption. Your data is confidential, and you have
          complete control over your privacy settings.
        </li>

        <li>
          Mood Notes: Enhance your mood entries with personalized notes.
          Document the events, activities, or thoughts that influenced your
          emotions on any given day.
        </li>

        <li>
          Positive Habits: Establish healthy habits and reinforce positive
          emotions through the app's motivational features and goal-setting
          capabilities.
        </li>

        <li>
          Insights for Growth: Use MoodLogMe to identify potential stress
          triggers and develop coping mechanisms for a more balanced and
          fulfilling life.
        </li>
      </ul>
      <p>
        {`
        With MoodLogMe, you'll be empowered to embrace emotional intelligence
        and gain a deeper connection with yourself. Start your journey of
        self-discovery today and unlock the potential for a happier and more
        meaningful life.
      `}
      </p>
    </>
  );
};
export default Home;
