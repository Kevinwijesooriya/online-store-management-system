export default function ValidateFinancialInfo(values) {
    let errors = {};
  
    if (!values.role_name.trim()) {
      errors.role_name = 'Role name required';
    }
    if (!values.salary) {
      errors.salary = 'Salary required';
    }else if (!/^[0-9\b]+$/.test(values.salary)) {
      errors.salary = 'Invalid!!! Please enter a numeric value';
    }
    if (!values.date) {
      errors.date = 'Date required';
    }


    // else if (!/^[A-Za-z]+/.test(values.name.trim())) {
    //   errors.name = 'Enter a valid name';
    // }
  
    // if (!values.email) {
    //   errors.email = 'Email required';
    // } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    //   errors.email = 'Email address is invalid';
    // }
    // if (!values.password) {
    //   errors.password = 'Password is required';
    // } else if (values.password.length < 6) {
    //   errors.password = 'Password needs to be 6 characters or more';
    // }
  
    // if (!values.password2) {
    //   errors.password2 = 'Password is required';
    // } else if (values.password2 !== values.password) {
    //   errors.password2 = 'Passwords do not match';
    // }
    return errors;
  }