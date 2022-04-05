import {useState, useEffect} from 'react';

import './Clock.scss';
import moment from 'moment';

const Clock = () => {
  const [hours, setHours] = useState('');
  const [minutes, setMinutes] = useState('');

  useEffect(() => {
    setInterval (() => {
      setHours(moment().hours());
      setMinutes(moment().minutes());
    }, 1000)
  }, [])
  
  // console.log(document.querySelector('.time').innerHTML)

  return (
    <div className="clock">
      <span className="hours">{hours}</span><span className='clock-separator'> : </span><span className="minutes">{minutes}</span>
    </div>
  );
}

export default Clock;