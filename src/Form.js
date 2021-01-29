import React from 'react';
import styled from 'styled-components';
import { Redirect } from 'react-router-dom';

export default function Form(props) {
  const {
    username, 
    size, 
    pepperoni, 
    mushrooms, 
    pineapple, 
    olives, 
    instructions
  } = props.values;

  const { change, submit, errors, disabled, confirmation } = props;

  const handleChange = (evt) => {
    const { name, value, type, checked } = evt.target;
    const valueToUse = type === 'checkbox' ? checked : value;
    change(name, valueToUse);
  }

  const handleSubmit = (evt) => {
    evt.preventDefault();
    submit();
  }

  if (confirmation) {
    return (<Redirect to='/confirmation' />)
  }

  return(
    <form>
      <FlexForm>
        <label> Name:
          <input 
            type='text'
            name='username'
            value={username}
            onChange={handleChange}
            id='username'
          />
        </label>
        <span className="error">{errors.username}</span>
        <label> Size:
          <select name="size" value={size} onChange={handleChange} id='size'>
            <option value="">Choose a size</option>
            <option value="10">10"</option>
            <option value="12">12"</option>
            <option value="14">14"</option>
          </select>
        </label>
        <span className="error">{errors.size}</span>
        <div> Toppings:
          <label> Pepperoni
            <input
              type='checkbox' 
              name='pepperoni'
              checked={pepperoni}
              onChange={handleChange}
              id='pepperoni'
            />
          </label>
          <label> Mushrooms
            <input
              type='checkbox' 
              name='mushrooms'
              checked={mushrooms}
              onChange={handleChange}
              id='mushrooms'
            />
          </label>
          <label> Pineapple
            <input
              type='checkbox'
              name='pineapple'
              checked={pineapple}
              onChange={handleChange}
              id='pineapple'
            />
          </label>
          <label> Olives
            <input
              type='checkbox' 
              name='olives'
              checked={olives}
              onChange={handleChange}
              id='olives'
            />
          </label>
        </div>
        <label> Special instructions:
          <input 
            type='text'
            name='instructions'
            value={instructions}
            onChange={handleChange}
          />
        </label>
        <button disabled={disabled} onClick={handleSubmit}>Add to Order</button>
      </FlexForm>
    </form>
  )
}

const FlexForm = styled.div`
  display:flex;
  flex-flow: column nowrap;
  justify-content: space-evenly;
  align-items: center;
  
  input {
    margin:5px;
  }
  select {
    margin:5px;
  }  
  label, div, button {
    margin: 15px;
    display:block;
  }
`