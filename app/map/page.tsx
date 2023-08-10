import calendarData from '../lib/calendar.json';
import { getHolidays } from '../lib/holidays';

type DayObject = {
  id: number;
  monthDay: number;
  weekDay: string;
  month: string;
  weekend: boolean;
  holiday?: object;
};

// https://yarnpkg.com/package/classnames

const MapPage = async () => {
  // const holidays = await getHolidays();
  // console.log('---  🚀 ---> | holidays:', holidays.response.holidays);
  console.log('---  🚀 ---> | calendarData:', calendarData);

  return (
    <>
      <div className='flex flex-wrap items-center justify-center gap-2'>
        {calendarData.map((day: any) => (
          <div key={day.id}>
            <div
              className={`flex flex-col items-center justify-center h-20 w-20 border border-neutral-400 ${
                day.weekend && 'bg-yellow-500'
              }`}
            >
              <div className='text-3xl'>🤪</div>
              <p className='text-white font-normal text-xs'>{day.month}</p>
              <p className='text-white font-normal text-xs'>{day.monthDay}</p>
              {/* <p className='text-white font-normal text-xs'>{day.weekDay}</p> */}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
export default MapPage;
