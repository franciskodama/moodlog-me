import { year2023 } from '../lib/calendar';
import { getHolidays } from '../lib/holidays';

const MapPage = async () => {
  const holidays = await getHolidays();
  console.log('---  🚀 ---> | holidays:', holidays.response.holidays);

  return (
    <>
      <div className='flex flex-wrap items-center justify-center gap-2'>
        {holidays.response.holidays.map((holiday: any) => (
          <div key={holiday.name}>
            <div className='flex flex-col items-center justify-center h-20 w-20 border border-neutral-400'>
              <div className='text-3xl'>🤪</div>
              <p className='text-white font-normal text-xs'>{holiday.name}</p>
            </div>
          </div>
        ))}
      </div>

      {/* 
      <div className='flex flex-wrap items-center justify-center gap-2'>
        {holidays.response.holidays.map((holiday: any) => (
          <div key={holiday.name}>
            <div className='flex flex-col items-center justify-center h-20 w-20 border border-neutral-400'>
              <div className='text-3xl'>🤪</div>
              <p className='text-white font-normal text-xs'>{holiday.name}</p>
            </div>
          </div>
        ))}
      </div> */}
    </>
  );
};
export default MapPage;

// export const year2023 = [
//   { name: 'January', days: 31, firstDayOfWeek: 'Sunday' },
//   { name: 'February', days: 28, firstDayOfWeek: 'Wednesday' },
//   { name: 'March', days: 31, firstDayOfWeek: 'Wednesday' },
//   { name: 'April', days: 30, firstDayOfWeek: 'Saturday' },
//   { name: 'May', days: 31, firstDayOfWeek: 'Monday' },
//   { name: 'June', days: 30, firstDayOfWeek: 'Friday' },
//   { name: 'July', days: 31, firstDayOfWeek: 'Sunday' },
//   { name: 'August', days: 31, firstDayOfWeek: 'Wednesday' },
//   { name: 'September', days: 30, firstDayOfWeek: 'Saturday' },
//   { name: 'October', days: 31, firstDayOfWeek: 'Monday' },
//   { name: 'November', days: 30, firstDayOfWeek: 'Thursday' },
//   { name: 'December', days: 31, firstDayOfWeek: 'Saturday' },
// ];
