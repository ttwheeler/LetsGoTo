import React, { useState, useEffect } from 'react';
import axios from 'axios';
import IteneraryTable from './IteneraryTable.jsx';

function Itenerary({ id }) {
  const [trip, setTrip] = useState(null);

  useEffect(() => {
    axios.get(`/trips/${id}`)
      .then((res) => setTrip(res.data))
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <div className="itenerary-body">
      {!trip ? <h2>Loading...</h2>
        : (
          <>
            <h1 className="trip-title">{trip.title}</h1>
            <h2 className="guest-count">
              {trip.guests}
              {' '}
              guests
            </h2>
            <h3 className="section-heading">Stay</h3>
            <IteneraryTable items={trip.stay} type="Stay" />
            <h3 className="section-heading">Eat</h3>
            <IteneraryTable items={trip.eat} type="Eat" />
            <h3 className="section-heading">Do</h3>
            <IteneraryTable items={trip.activities} type="Do" />
          </>
        )}
    </div>
  );
}

export default Itenerary;
