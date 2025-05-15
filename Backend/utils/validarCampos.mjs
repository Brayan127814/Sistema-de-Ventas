const validateFields = (data, requiredFields) => {
  for (let field of requiredFields) {
    if (!data[field]) {
      return {
        message:`El campo '${field}' es obligatorio.`,
        
      }
    }
  }
  return true;
};


export default validateFields   