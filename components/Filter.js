import React, { useState, useEffect, useContext } from 'react';
import Error from '../components/Error/Error';
import { EpisodeContext } from '../context/EpisodeContext';

const Filter = () => {
  const [dates, setDates] = useState({
    from: '2013-12-02',
    to: '2020-05-28',
  });

  const [isValidDate, setDateValidity] = useState(true);
  const { setFilterDates } = useContext(EpisodeContext);

  const setDate = (event) => {
    setDates({
      ...dates,
      [event.target.name]: event.target.value,
    });
  };

  useEffect(() => {
    const from = Date.parse(dates.from + 'T00:00:00');
    const to = Date.parse(dates.to + 'T00:00:00');
    validateDates(from, to);
    if (isValidDate) {
      setFilterDates({ from, to });
    }
  }, [dates]);

  const validateDates = (from, to) => {
    if (isNaN(from) || isNaN(to) || from > to) setDateValidity(false);
    else return setDateValidity(true);
  };

  return (
    <div className="block">
      <p className="subtitle">Air date Between</p>
      <div className="columns ">
        <div className="column is-4">
          <div className="field">
            <div className="control">
              <input
                name="from"
                type="date"
                value={dates.from}
                className="input"
                onChange={setDate}
              />
            </div>
          </div>
        </div>

        <div className="column is-4">
          <div className="field">
            <div className="control">
              <input
                name="to"
                type="date"
                className="input"
                value={dates.to}
                onChange={setDate}
              />
            </div>
          </div>
        </div>
      </div>
      {!isValidDate && <Error errorMessage="Enter valid dates" />}
    </div>
  );
};
export default Filter;
