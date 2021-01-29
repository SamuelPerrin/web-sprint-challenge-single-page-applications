import React, { useEffect, useState } from "react";
import { Route } from 'react-router-dom';
import Home from './Home';
import Form from './Form';
import Confirmation from './Confirmation';
import schema from './schema';
import * as yup from 'yup';
import axios from 'axios';

const initialFormValues = {
  username: '',
  size: '',
  pepperoni: false,
  mushrooms: false,
  pineapple: false,
  olives: false,
  instructions: '',
};

const initialErrors = {
  username: '',
  size: '',
  pepperoni: '',
  mushrooms: '',
  pineapple: '',
  olives: '',
  instructions: ''
}

const App = () => {
  const [formValues, setFormValues] = useState(initialFormValues);
  const [errors, setErrors] = useState(initialErrors);
  const [disabled, setDisabled] = useState(true);
  const [confirmationRedirect, setConfirmationRedirect] = useState(false);

  const updateForm = (name, value) => {
    yup
      .reach(schema, name)
      .validate(value)
      .then(() => {
        setErrors({ ...errors, [name]: '' });
      })
      .catch(err => {
        setErrors({ ...errors, [name]: err.errors[0]});
      });
    
    setFormValues({ ...formValues, [name]: value });
  }

  const submitForm = () => {
    axios
      .post('https://reqres.in/api/users', formValues)
      .then(res => console.log("got this back from post request", res))
      .catch(err => console.log(err));
    setConfirmationRedirect(true);
  }

  const resetFormValues = () => {
    setFormValues(initialFormValues);
    setConfirmationRedirect(false);
  }

  useEffect(() => {
    schema.isValid(formValues).then(valid => setDisabled(!valid))
  }, [formValues])

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
        <Form
          values={formValues}
          change={updateForm}
          submit={submitForm}
          errors={errors}
          disabled={disabled}
          confirmation={confirmationRedirect}
        />
      </Route>
      <Route path='/confirmation'>
        <Confirmation values={formValues} resetFormValues={resetFormValues} />
      </Route>
    </div>
  );
};
export default App;
