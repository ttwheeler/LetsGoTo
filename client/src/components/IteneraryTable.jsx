import React, { useState } from 'react';
import axios from 'axios';
import AddDialog from './AddDialog.jsx';

function IteneraryTable({ items, type, id }) {
  const [entries, setEntries] = useState(items);

  const handleAdd = (input) => {
    console.log(input);

    axios.post(`/trips/${id}`, input)
      .then(() => {
        axios.get(`/trips/${id}/${type.toLowerCase()}`)
          .then((res) => setEntries(res.data))
          .catch((err) => console.log(err));
      })
      .catch((err) => console.log(err));
  };

  if (type !== 'Eat') {
    return (
      <>
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
        <AddDialog type={type} handleAdd={handleAdd} />
      </>
    );
  }
  return (
    <>
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
      <AddDialog type={type} handleAdd={handleAdd} />
    </>
  );
}

export default IteneraryTable;
