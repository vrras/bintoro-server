import * as moment from 'moment';

export const currentDate = () => {
  const minOffset = moment().utcOffset();
  return moment().utc(true).subtract(minOffset, 'minutes');
};

export const realDate = (date: string) => {
  const minOffset = moment().utcOffset();
  return moment(date).utc(true).subtract(minOffset, 'minutes');
};

export const reportDate = (date: string) => {
  const minOffset = moment(date).utcOffset();
  return moment().add(minOffset, 'minutes');
};

export function getDateRange(startDate: string, endDate: string): string[] {
  const start = moment(new Date(startDate));
  const end = moment(new Date(endDate));
  const days: string[] = [];

  while (start <= end) {
    days.push(moment(start).format('YYYY-MM-DD'));
    start.add(1, 'days');
  }

  return days;
}
