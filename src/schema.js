import * as yup from 'yup';

const schema = yup.object().shape({
  username: yup.string().required("Name is a required field.").min(2,"Name must be at least 2 characters."),
  size: yup.string().oneOf(['10','12','14'], "Size is a required field.").min(2,"Size is a required field."),
  pepperoni: yup.boolean().oneOf([true,false]),
  mushrooms: yup.boolean().oneOf([true,false]),
  pineapple:yup.boolean().oneOf([true,false]),
  olives: yup.boolean().oneOf([true,false]),
  instructions: yup.string()
});

export default schema;