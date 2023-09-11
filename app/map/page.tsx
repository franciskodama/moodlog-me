import Cell from '../../components/Cell';
import calendarData from '../../lib/data/calendar.json';
import { DayObject } from '../../lib/calendar';
import { getHolidays } from '../../lib/holidays';
import { currentUser } from '@clerk/nextjs';
// import { getDay } from '../../lib/day.server';
import Link from 'next/link';

// https://yarnpkg.com/package/classnames
// https://ui.shadcn.com/docs/components/dialog

const MapPage = async () => {
  const user = await currentUser();

  // let day;
  // if (user) {
  //   day = await getDay(user?.id);
  // }

  return (
    <div className='flex flex-wrap items-center justify-center gap-2'>
      {calendarData.map((day: any) => (
        <div key={day.id}>
          <Link href={`/map/${day.id}`}>
            <Cell day={day} />
          </Link>
        </div>
      ))}
    </div>
  );
};
export default MapPage;

// const holidays = await getHolidays();
// console.log('---  🚀 ---> | holidays:', holidays.response.holidays);
// console.log('---  🚀 ---> | calendarData:', calendarData);
