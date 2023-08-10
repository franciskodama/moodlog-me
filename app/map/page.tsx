import Cell from '../components/Cell';
import calendarData from '../lib/calendar.json';
import { DayObject } from '../lib/calendar';
import { getHolidays } from '../lib/holidays';

// https://yarnpkg.com/package/classnames

const MapPage = async () => {
  // const holidays = await getHolidays();
  // console.log('---  🚀 ---> | holidays:', holidays.response.holidays);
  console.log('---  🚀 ---> | calendarData:', calendarData);

  return (
    <>
      <div className='flex flex-wrap items-center justify-center gap-2'>
        {calendarData.map((day: DayObject) => (
          <Cell key={day.id} day={day} />
        ))}
      </div>
    </>
  );
};
export default MapPage;
