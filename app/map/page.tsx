import Cell from '../../components/Cell';
import calendarData from '../../lib/data/calendar.json';
import { DayObject } from '../../lib/calendar';
import { getHolidays } from '../../lib/holidays';
import { currentUser } from '@clerk/nextjs';
// import { getDay } from '../../lib/day.server';
import Link from 'next/link';
import { HowIsToday } from '../how-is-today/page';

// https://yarnpkg.com/package/classnames
// https://ui.shadcn.com/docs/components/dialog

type Props = {
  locale: string;
  dayId: string;
};

const MapPage = async ({ params }: { params: Props }) => {
  // const { locale, dayId } = locale;

  const user = await currentUser();
  const locale: string = 'ca';
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
      <HowIsToday locale={locale} today={dayId} />
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
