import React, { useState } from 'react';
import IteneraryTable from './IteneraryTable.jsx';

function Itenerary() {
  const [trip, setTrip] = useState(testData);
  return (
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
  );
}

export default Itenerary;

const testData = {
  id: 5349520342,
  title: 'Cuba Trip',
  guests: 6,
  stay: [{
    id: 1,
    title: 'Austin AirBnB',
    url: 'https://www.airbnb.com/rooms/plus/23304367?federated_search_id=47aff7bc-f04b-4a2c-866e-57543cd147af&source_impression_id=p3_1651592117_dYPYpe8x2ZpQqeYf',
    votes: 3,
  }],
  eat: [{
    id: 6,
    title: 'Fresas ATX',
    url: 'https://www.fresaschicken.com/',
    meal: 'Dinner',
    cost: '$$',
    votes: 5,
  }],
  activities: [{
    id: 14,
    title: 'Riverside Paddle Boarding',
    url: 'https://www.livelovepaddle.com/',
    votes: 6,
  }],
};
