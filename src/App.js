import React, { useEffect, useState } from "react";
import { Route } from 'react-router-dom';
import Home from './Home';
import Form from './Form';
import schema from './schema';
import * as yup from 'yup';

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
  size:'',
  pepperoni:'',
  mushrooms:'',
  pineapple:'',
  olives:'',
  instructions:''
}

const App = () => {
  const [formValues, setFormValues] = useState(initialFormValues);
  const [errors, setErrors] = useState(initialErrors);
  const [disabled, setDisabled] = useState(true)

  const updateForm = (name, value) => {
    yup
      .reach(schema, name)
      .validate(value)
      .then(() => {
        setErrors({ ...errors, [name]:'' });
      })
      .catch(err => {
        setErrors({ ...errors, [name]:err.errors[0]});
      });
    
    setFormValues({ ...formValues, [name]:value });
  }

  const submitForm = () => {
    console.log("Submitting this data", formValues)
    setFormValues(initialFormValues);
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
        />
      </Route>

    </div>
  );
};
export default App;
