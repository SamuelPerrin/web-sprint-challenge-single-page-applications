import React, { useState } from "react";
import { Route } from 'react-router-dom';
import Home from './Home';
import Form from './Form';

const initialFormValues = {
  username: '',
  size: '',
  pepperoni: false,
  mushrooms: false,
  pineapple: false,
  olives: false,
  instructions: '',
}

const App = () => {
  const [formValues, setFormValues] = useState(initialFormValues);

  const updateForm = (name, value) => {
    setFormValues({ ...formValues, [name]:value });
  }

  const submitForm = () => {
    console.log("Submitting this data", formValues)
    setFormValues(initialFormValues);
    
  }

  return (
    <div>
      <header>
        <h1>Lambda Eats</h1>
        <p>Pizza so good that even people who don't like other pizza like it</p>
      </header>

      <Route exact path='/'>
        <Home />
      </Route>
      <Route path='/pizza'>
        <Form values={formValues} change={updateForm} submit={submitForm} />
      </Route>

    </div>
  );
};
export default App;
