import { year2023 } from '../lib/calendar';
import { getHolidays } from '../lib/holidays';

const MapPage = async () => {
  const holidays = await getHolidays();
  console.log('---  🚀 ---> | holidays:', holidays.response.holidays);

  return (
    <>
      <div className='container p-4 border-2 border-green-600 w-full'>
        {holidays.response.holidays.map((holiday: any) => (
          <div key={holiday.name} className='flex flex-wrap w-full'>
            <div className='flex flex-col items-center justify-center h-20 w-20 border border-neutral-400'>
              <div className='text-3xl'>🤪</div>
              <p className='text-white font-normal text-xs'>{holiday.name}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
export default MapPage;
