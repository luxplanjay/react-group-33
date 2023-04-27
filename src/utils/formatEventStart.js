import { format } from 'date-fns';
// для детализации времени на англ, укр... import { ru } from 'date-fns/locale'; + , {locale: ru}
// import { uk } from 'date-fns/locale';

export const formatEventStart = start => {
  return format(Date.parse(start), 'dd MMMM yyyy, HH:mm');
};

// export const formatEventStart = start => {
//     return format(Date.parse(start), 'dd MMMM yyyy, HH:mm', {locale: uk});
//   };