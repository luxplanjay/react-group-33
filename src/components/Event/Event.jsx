import PropTypes from "prop-types"
import { FaMapMarkerAlt, FaUserAlt, FaCalendarAlt, FaClock } from "react-icons/fa";
import css from "./Event.module.css"
// import { formatEventStart } from "utils/formatEventStart"
// import {formatEventDuration} from "utils/formatEventDuration"
// вместо 2 импортов выше делаем 1 благодаря index.js в той же папке
import {formatEventStart, formatEventDuration} from "utils"
import { iconsSet } from "constants";


export const Event = ({name, location, speaker, type, start, end}) => {
const formattedStart = formatEventStart(start)
const duration = formatEventDuration (start, end)
return <div className={css.event}>
<h2 className={css.title}>{name}</h2>
<p className={css.info}>
{/* вместо иконки импортируем каждую отдельну. иконку с react-icons */}
  {/* <i className={css.icon}></i> */}
  {/* <FaMapMarkerAlt className={css.icon} size={16} color="grey"/> */}
  <FaMapMarkerAlt className={css.icon} size={iconsSet.sm.size} color={iconsSet.sm.color}/>
  {location}
</p>
<p className={css.info}>
<FaUserAlt className={css.icon} size={iconsSet.sm.size} color={iconsSet.sm.color}/>
 
  {speaker}

</p>
<p className={css.info}>
<FaCalendarAlt className={css.icon} size={iconsSet.sm.size} color={iconsSet.sm.color}/>
 
  {formattedStart}
</p>
<p className={css.info}>
  <i className={css.icon}></i>
  <FaClock className={css.icon} size={iconsSet.sm.size} color={iconsSet.sm.color}/>
  {duration}
</p>
<span className={`${css.chip} ${css[type]}`}>{type}</span>
{/* <span className={css.chip}>{type}</span> */}
</div>
}

Event.propTypes ={
    name: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
     speaker: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired, 
      start: PropTypes.string.isRequired,
       end: PropTypes.string.isRequired,
}