import Cell from '../../components/Cell';
import calendarData from '../../lib/data/calendar.json';
import { DayObject } from '../../lib/calendar';
import { getHolidays } from '../../lib/holidays';
import { currentUser } from '@clerk/nextjs';
// import { getDay } from '../../lib/day.server';
import Link from 'next/link';
import { HowIsToday } from '../how-is-today/page';
import { getUserLocation } from '@/lib/location.server';

// https://yarnpkg.com/package/classnames
// https://ui.shadcn.com/docs/components/dialog

const MapPage = async () => {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, '0');
  const day = String(today.getDate()).padStart(2, '0');
  const dayId = `${year}-${month}-${day}`;

  // let day;
  // if (user) {
  //   day = await getDay(user?.id);
  // }

  return (
    <>
      <HowIsToday today={dayId} />
      <div className='flex flex-wrap items-center justify-center gap-2'>
        {calendarData.map((day: any) => (
          <div key={day.id}>
            <Link href={`/map/${day.id}`}>
              <Cell day={day} />
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};
export default MapPage;

// const holidays = await getHolidays();
// console.log('---  🚀 ---> | holidays:', holidays.response.holidays);
// console.log('---  🚀 ---> | calendarData:', calendarData);
