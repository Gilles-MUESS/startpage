import {useState, useEffect} from 'react';

import './Clock.scss';
import moment from 'moment';
import 'moment/locale/fr';

const Clock = ({className}) => {
  moment.locale('fr');

  const [hours, setHours] = useState('');
  const [minutes, setMinutes] = useState('');
  const [date, setDate] = useState('');

  useEffect(() => {
    setInterval (() => {
      setHours(moment().format("kk"));
      setMinutes(moment().format("mm"));
      setDate(moment().format("dddd, DD MMMM YYYY"));
    }, 1000)
  }, [])
  
  return (
    <div className={`clock ${className}`}>
      <div className='clock-inner'>
        <span className="hours">{hours}</span><span className='clock-separator'> : </span><span className="minutes">{minutes}</span>
      </div>
      <div className='date-inner'>
        {date}
      </div>
    </div>
  );
}

export default Clock;