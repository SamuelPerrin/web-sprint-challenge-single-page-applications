import React from 'react';
import { Link } from 'react-router-dom';

export default function Confirmation (props) {
  return (
    <div style={{marginLeft:'10%'}}>
      <h2>Congrats! Your pizza is on its way!</h2>
      <h3>Your order:</h3>
      <ul>
        {Object.keys(props.values).map(value => props.values[value] ? <li key={value}>{value}: {props.values[value]}</li> : null)}
      </ul>
      <div>
        <Link to='/' onClick={props.resetFormValues} style={{margin:'5%'}}>
          Go back home
        </Link>
        <Link to='/pizza' onClick={props.resetFormValues} style={{margin:'5%'}}>
          Make another order
        </Link>
      </div>
    </div>
  )
}