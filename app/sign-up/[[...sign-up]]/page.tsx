import { SignUp } from '@clerk/nextjs';

const SignUpPage = () => {
  return (
    <>
      <div className='relative'>
        <SignUp
          signInUrl='/sign-in'
          appearance={{
            elements: {
              card: 'bg-white',
              logoBox: 'hidden',
              headerTitle: 'uppercase text-center font-semibold text-2xl mb-6',
              headerSubtitle: 'hidden',
              formButtonPrimary: 'bg-primary text-xl',
              formFieldHintText: 'text-[10px] text-neutral-300',
            },
          }}
        />
        <div className='absolute top-0 left-0 w-7 h-[15em] bg-primary' />
      </div>
    </>
  );
};
export default SignUpPage;
