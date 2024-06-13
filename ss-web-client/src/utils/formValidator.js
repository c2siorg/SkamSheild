export function validate(formObject, schema) {
  console.log("----------validate------------")
  console.log(formObject, schema)
  const valid = schema.validate(formObject);
  console.log(valid);
  const newErrorObject = {};
  if (valid.error) {
    valid.error.details.forEach((err) => {
      newErrorObject[err.path.join(".")] = err.message;
    });
  }
  console.log(newErrorObject);
  console.log("----------end validate------------")
  return newErrorObject;
}
