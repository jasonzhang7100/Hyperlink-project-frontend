const validate = (name, data) => {
  const { value } = data[name];
  const NAME_REGEXP = /^[A-Za-z]+$/;
  const EMAIL_REGEXP = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/;
  const PHONE_REGEXP = /^(?:\+?(61))? ?(?:\((?=.*\)))?(0?[2-57-8])\)? ?(\d\d(?:[- ](?=\d{3})|(?!\d\d[- ]?\d[- ]))\d\d[- ]?\d[- ]?\d{3})$/;

  switch (name) {
    case 'guestNumber': {
      if (!value) {
        return 'Please input the number of guest';
      }
      if (value <= 0) {
        return 'Please input a valid number';
      }
      return '';
    }

    case 'email': {
      if (!value) {
        return 'Please input your email';
      }
      if (!EMAIL_REGEXP.test(value)) {
        return 'Please input a valid email';
      }
      return '';
    }

    case 'firstName': {
      if (!value) {
        return 'Please input your first name';
      }
      if (!NAME_REGEXP.test(value)) {
        return 'Please input English alphabets only';
      }
      return '';
    }

    case 'lastName': {
      if (!value) {
        return 'Please input your last name';
      }
      if (!NAME_REGEXP.test(value)) {
        return 'Please input English alphabets only';
      }
      return '';
    }

    case 'phoneNumber': {
      if (!value) {
        return 'Please input your phone number';
      }
      if (!PHONE_REGEXP.test(value)) {
        return 'Please enter your landline or mobile number only';
      }
      return '';
    }

    case 'birthDate': {
      const currentYear = new Date().getFullYear();
      const birthDate = value.split('-');
      const birthYear = birthDate[0];

      if (!value) {
        return 'Please enter your date of birth';
      }

      if (currentYear - birthYear < 18) {
        return 'Please make sure you are over 18 years of age';
      }
      return '';
    }

    case 'towelChecked': {
      if (value === false) {
        return 'Please read and tick the box';
      }
      return '';
    }

    case 'password': {
      if (!value) {
        return 'Please enter your password';
      }
      return '';
    }

    default:
      return '';
  }
};

export default validate;
