import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div>
      Home
      <Link to='/pizza'> 
        <button>Pizza?</button>
      </Link>
    </div>
  )
}