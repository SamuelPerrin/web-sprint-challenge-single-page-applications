import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import pizza from './Pizza.jpg'

export default function Home() {
  return (
    <div>
      <StyledHead>
        Your favorite food, delivered while coding <br />
        <Link to='/pizza'> 
          <button>Pizza?</button>
        </Link>
      </StyledHead>
    </div>
  )
}

const StyledHead = styled.div`
  font-family:'Courier New', Courier, monospace;
  color: white;
  font-size: 3rem;
  text-align: center;
  text-shadow: 2px 2px black;
  background: url(${pizza});
  height: 40vh;
  
  button {
    background-color:white;
    border-radius:5px;
    border: 2px solid red;
    color:red;
    font-size:2rem;
    margin-top:7%;
  }

  button:hover{
    color:white;
    background-color:red;
    border: 2px solid white;
  }
`