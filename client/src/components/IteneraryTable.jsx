import React, { useState } from 'react';

function IteneraryTable({ items, type }) {
  const [entries, setEntries] = useState(items);
  if (type !== 'Eat') {
    return (
      <table>
        <thead>
          <tr>
            <th>{(type === 'Stay') ? 'Location' : 'Restaurant'}</th>
            <th />
            <th>Votes</th>
          </tr>
        </thead>
        <tbody>
          {entries.map((item) => (
            <tr key={item.id}>
              <td><a href={item.url}>{item.title}</a></td>
              <td><button type="button">Vote</button></td>
              <td>
                {item.votes}
                {' '}
                votes
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
  return (
    <table>
      <thead>
        <tr>
          <th>Restaurant</th>
          <th>Meal</th>
          <th>Price</th>
          <th />
          <th>Votes</th>
        </tr>
      </thead>
      <tbody>
        {entries.map((item) => (
          <tr key={item.id}>
            <td><a href={item.url}>{item.title}</a></td>
            <td>{item.meal}</td>
            <td>{item.cost}</td>
            <td><button type="button">Vote</button></td>
            <td>
              {item.votes}
              {' '}
              votes
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default IteneraryTable;
