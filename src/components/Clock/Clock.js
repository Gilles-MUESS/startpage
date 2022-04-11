import {useState, useEffect} from 'react';

import './Clock.scss';
import moment from 'moment';

const Clock = ({className}) => {
  const [hours, setHours] = useState('');
  const [minutes, setMinutes] = useState('');
  const [date, setDate] = useState('');

  useEffect(() => {
    setInterval (() => {
      setHours(moment().hours());
      setMinutes(moment().minutes());
      setDate(moment().format("DD/MM/YYYY"));
    }, 1000)
  }, [])
  
  return (
    <div className={`clock ${className}`}>
      <p className='clock-inner'>
        <span className="hours">{hours}</span><span className='clock-separator'> : </span><span className="minutes">{minutes}</span>
      </p>
      <p className='date-inner'>
        {date}
      </p>
    </div>
  );
}

export default Clock;