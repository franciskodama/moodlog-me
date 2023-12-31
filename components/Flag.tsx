import Image from 'next/image';
import { CountryCode } from '../lib/coutries';

const Flag = ({ countryCode }: { countryCode: string }) => {
  return (
    <div className='h-5 w-8 border-2 border-primary'>
      <Image
        width={160}
        height={90}
        src={`https://flagcdn.com/w160/${countryCode.toLowerCase()}.webp`}
        className='h-full w-full object-cover'
        alt={`${CountryCode} flag`}
      />
    </div>
  );
};

export default Flag;
