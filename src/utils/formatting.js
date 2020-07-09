import advancedFormat from 'dayjs/plugin/advancedFormat';
import day from 'dayjs';

export function formatDate(timestamp, template = 'MMM Do HH:mm') {
  day.extend(advancedFormat);
  return day(timestamp).format(template);
}
