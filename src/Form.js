import React from 'react';

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

  const { change, submit, errors, disabled } = props;

  const handleChange = (evt) => {
    const { name, value, type, checked } = evt.target;
    const valueToUse = type === 'checkbox' ? checked : value;
    change(name, valueToUse);
  }

  const handleSubmit = (evt) => {
    evt.preventDefault();
    submit();
  }

  return(
    <div>
      <form>
        <label> Name:
          <input 
            type='text'
            name='username'
            value={username}
            onChange={handleChange}
          />
        </label>
        <span className="error">{errors.username}</span>
        <label> Size:
          <select name="size" value={size} onChange={handleChange}>
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
            />
          </label>
          <label> Mushrooms
            <input
              type='checkbox' 
              name='mushrooms'
              checked={mushrooms}
              onChange={handleChange}
            />
          </label>
          <label> Pineapple
            <input
              type='checkbox'
              name='pineapple'
              checked={pineapple}
              onChange={handleChange}
            />
          </label>
          <label> Olives
            <input
              type='checkbox' 
              name='olives'
              checked={olives}
              onChange={handleChange}
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
        <button disabled={disabled} onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  )
}