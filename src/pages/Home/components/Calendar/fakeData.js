const sessionData = {
  date: '2021-07',
  stateArr: [
    'available',
    'closed',
    'limited',
    'available',
    'closed',
    'available',
    'limited',
    'closed',
    'available',
    'available',
    'closed',
    'available',
    'available',
    'available',
    'limited',
    'closed',
    'available',
    'available',
    'available',
    'limited',
    'closed',
    'fully booked',
    'closed',
    'available',
    'available',
    'available',
    'available',
    'available',
    'closed',
    'fully booked',
    'fully booked',
  ],
};

const getSessionData = (month) => {
  // eslint-disable-next-line no-console
  console.log(month);
  return sessionData;
};

export default getSessionData;

// 通过输入起止日期获得一个月多几天的sessions（从当月1日所在周的周日起，到当月31日所在周的周六止）

// const sessionData = [
//   {
//     date: '20210627',
//     time: 0,
//     maxNumber: 8,
//     bookings: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
//   },
//   {
//     date: '20210628',
//     time: 0,
//     maxNumber: 12,
//     bookings: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
//   },
//   {
//     date: '20210629',
//     time: 0,
//     maxNumber: 30,
//     bookings: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
//   },
//   {
//     date: '20210630',
//     time: 0,
//     maxNumber: 8,
//     bookings: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
//   },
//   {
//     date: '20210701',
//     time: 0,
//     maxNumber: 0,
//     bookings: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
//   },
//   {
//     date: '20210702',
//     time: 0,
//     maxNumber: 20,
//     bookings: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
//   },
//   {
//     date: '20210703',
//     time: 0,
//     maxNumber: 20,
//     bookings: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
//   },
//   {
//     date: '20210704',
//     time: 0,
//     maxNumber: 20,
//     bookings: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
//   },
//   {
//     date: '20210705',
//     time: 0,
//     maxNumber: 20,
//     bookings: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
//   },
//   {
//     date: '20210706',
//     time: 0,
//     maxNumber: 20,
//     bookings: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
//   },
//   {
//     date: '20210707',
//     time: 0,
//     maxNumber: 20,
//     bookings: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
//   },
//   {
//     date: '20210708',
//     time: 0,
//     maxNumber: 20,
//     bookings: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
//   },
//   {
//     date: '20210709',
//     time: 0,
//     maxNumber: 20,
//     bookings: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
//   },
//   {
//     date: '20210710',
//     time: 0,
//     maxNumber: 20,
//     bookings: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
//   },
//   {
//     date: '20210711',
//     time: 0,
//     maxNumber: 20,
//     bookings: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
//   },
//   {
//     date: '20210712',
//     time: 0,
//     maxNumber: 20,
//     bookings: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
//   },
//   {
//     date: '20210713',
//     time: 0,
//     maxNumber: 20,
//     bookings: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
//   },
//   {
//     date: '20210714',
//     time: 0,
//     maxNumber: 20,
//     bookings: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
//   },
//   {
//     date: '20210715',
//     time: 0,
//     maxNumber: 20,
//     bookings: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
//   },
//   {
//     date: '20210716',
//     time: 0,
//     maxNumber: 20,
//     bookings: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
//   },
//   {
//     date: '20210717',
//     time: 0,
//     maxNumber: 20,
//     bookings: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
//   },
//   {
//     date: '20210718',
//     time: 0,
//     maxNumber: 20,
//     bookings: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
//   },
//   {
//     date: '20210719',
//     time: 0,
//     maxNumber: 20,
//     bookings: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
//   },
//   {
//     date: '20210720',
//     time: 0,
//     maxNumber: 20,
//     bookings: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
//   },
//   {
//     date: '20210721',
//     time: 0,
//     maxNumber: 20,
//     bookings: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
//   },
//   {
//     date: '20210722',
//     time: 0,
//     maxNumber: 20,
//     bookings: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
//   },
//   {
//     date: '20210723',
//     time: 0,
//     maxNumber: 20,
//     bookings: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
//   },
//   {
//     date: '20210724',
//     time: 0,
//     maxNumber: 20,
//     bookings: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
//   },
//   {
//     date: '20210725',
//     time: 0,
//     maxNumber: 20,
//     bookings: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
//   },
//   {
//     date: '20210726',
//     time: 0,
//     maxNumber: 20,
//     bookings: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
//   },
//   {
//     date: '20210727',
//     time: 0,
//     maxNumber: 20,
//     bookings: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
//   },
//   {
//     date: '20210728',
//     time: 0,
//     maxNumber: 20,
//     bookings: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
//   },
//   {
//     date: '20210729',
//     time: 0,
//     maxNumber: 20,
//     bookings: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
//   },
//   {
//     date: '20210730',
//     time: 0,
//     maxNumber: 20,
//     bookings: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
//   },
//   {
//     date: '20210731',
//     time: 0,
//     maxNumber: 20,
//     bookings: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
//   },
// ];
