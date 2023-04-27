import PropTypes from 'prop-types';
import { Event } from 'components/Event/Event';
// import { Board } from './EventBoard.styled';
import css from "./EventBoard.module.css"

export const EventBoard = ({ events }) => {
  return (
    <div className={css.eventBoard}>
      {events.map(({ name, location, speaker, type, time }) => (
        <Event
          key={name}
          name={name}
          location={location}
          speaker={speaker}
          type={type}
          start={time.start}
          end={time.end}
        />
      ))}
    </div>
  );
};

EventBoard.propTypes = {
  events: PropTypes.arrayOf(
    PropTypes.exact({
      name: PropTypes.string.isRequired,
      location: PropTypes.string.isRequired,
      speaker: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      time: PropTypes.exact({
        start: PropTypes.string.isRequired,
        end: PropTypes.string.isRequired,
      }),
    }),
  ),
};



// time включает 2 обьекта, указываем только time вначале

// Без деструктуризации весь обьект

// export const EventBoard = ({events}) => {
//     console.log(events)
//     return (
//         <div className={css.EventBoard}>
//             {events.map(event => (
//                 <Event key={event.name} name={event.name} location={event.location} speaker={event.speaker} type={event.type} start={event.time.start} end={event.time.end}/>
//             ))}
//         </div>
//     )
// }



// до деструктуризация  {events.map(event => (
//                 <Event key={event.name} name={event.name} location={event.location} speaker={event.speaker} type={event.type} start={event.time.start} end={event.time.end}/>

// после деструктуризации
// {events.map(({name, location, speaker, type, start, time}) => (
//     <Event key={name} name={name} location={location} speaker={speaker} type={type} start={time.start} end={time.end}/> 

