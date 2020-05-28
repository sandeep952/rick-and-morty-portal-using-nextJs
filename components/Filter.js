import React, { useState, useEffect, useContext } from 'react';
import { EpisodeContext } from '../context/EpisodeContext';
import DayPickerInput from 'react-day-picker/DayPickerInput';
const Filter = () => {
  const [dates, setDates] = useState({
    from: new Date('2013-12-02'),
    to: new Date(),
  });

  const { setFilterDates } = useContext(EpisodeContext);

  const setDate = (name, date) => {
    console.log(name);
    console.log(date);
    setDates({
      ...dates,
      [name]: date,
    });
  };

  useEffect(() => {
    const { from, to } = dates;
    setFilterDates({ from, to });
  }, [dates]);

  return (
    <div className="block">
      <p className="subtitle">Air date Between</p>
      <div className="columns ">
        <div className="column is-4">
          <DayPickerInput
            value={dates.from}
            dayPickerProps={{
              disabledDays: [{ after: dates.to }, { daysOfWeek: [2] }],
              todayButton: 'Go to Today',
            }}
            onDayChange={(date) => setDate('from', date)}
          />
        </div>

        <div className="column is-4">
          <DayPickerInput
            dayPickerProps={{
              disabledDays: [{ before: dates.from }, { daysOfWeek: [2] }],
              todayButton: 'Go to Today',
            }}
            value={dates.to}
            onDayChange={(date) => setDate('to', date)}
          />
        </div>
      </div>
    </div>
  );
};
export default Filter;
