import React from 'react';
import { Link } from 'react-router-dom';

export default function Confirmation (props) {
  return (
    <div>
      <h2>Congrats! Your pizza is on its way!</h2>
      <h3>Your order:</h3>
      <ul>
        {Object.keys(props.values).map(value => props.values[value] ? <li key={value}>{value}: {props.values[value]}</li> : null)}
      </ul>
      <Link to='/' onClick={props.resetFormValues}>
        Go back home
      </Link>
      <Link to='/pizza' onClick={props.resetFormValues}>
        Make another order
      </Link>
    </div>
  )
}