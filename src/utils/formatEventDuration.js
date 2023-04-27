import { formatDistanceStrict } from 'date-fns';
// import { uk } from 'date-fns/locale';
export const formatEventDuration = (start, end) => {
  return formatDistanceStrict(Date.parse(start), Date.parse(end));
};

// export const formatEventDuration = (start, end) => {
//     return formatDistanceStrict(Date.parse(start), Date.parse(end), {locale: uk});
//   };