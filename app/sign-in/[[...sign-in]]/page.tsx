import { SignIn } from '@clerk/nextjs';

const SignInPage = () => {
  return (
    <>
      <div className='relative'>
        <SignIn
          signUpUrl='/sign-up'
          appearance={{
            elements: {
              card: 'bg-white',
              logoBox: 'hidden',
              headerTitle: 'uppercase text-center font-semibold text-2xl mb-6',
              headerSubtitle: 'hidden',
              formButtonPrimary: 'bg-primary text-xl',
            },
          }}
        />
        <div className='absolute top-0 left-0 w-7 h-[15em] bg-primary' />
      </div>
    </>
  );
};
export default SignInPage;
