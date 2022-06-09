import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './Calendar1.css';

function Calendar1() {
  const [date, setDate] = useState([
    new Date(2021, 6, 1),
    new Date(2021, 6, 10),
  ]);

  return (
    <div className='app'>
      <h1 className='text-center'style={{textShadow: '0 0 3px pink, 0 0 5px skyblue'}}>Calendar</h1>
      <div className='calendar-container' style={{marginLeft:"29%"}}>
      <Calendar
          onChange={setDate}
          selectRange={true}
          defaultValue={date}                                                     
        />
      </div>
      {date.length > 0 ? (
        <p className='text-center'>
          <span className='bold'>Start:</span>{' '}
          {date[0].toDateString()}
          &nbsp;|&nbsp;
          <span className='bold'>End:</span> {date[1].toDateString()}
        </p>
      ) : (
        <p className='text-center'>
          <span className='bold'>Default selected date:</span>{' '}
          {date.toDateString()}
        </p>
      )}
    </div>
  );
}

export default Calendar1;




