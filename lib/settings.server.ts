import prisma from './prisma';

export const setCalendarView = async (uid: string, view: boolean) => {
  try {
    if (!prisma) {
      throw new Error('Prisma is not properly configured.');
    }

    const viewCalendar = await prisma?.userSettings.upsert({
      where: {
        uid: uid,
      },
      update: {
        view: !view,
      },
      create: {
        uid: uid,
        view: !view,
      },
    });
    return { viewCalendar };
  } catch (error) {
    return { error };
  }
};
