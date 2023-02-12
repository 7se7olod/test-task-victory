export class Validation {
  static inputCheckIsEmpty (valueInput) {
    if (!valueInput) {
      return 'This field is required'
    }
  }

  static validateName (value) {
    Validation.inputCheckIsEmpty(value)
    const regex = /^[a-zA-Z ]{2,30}$/
    if (!regex.test(value)) {
      return 'This field must be a valid name'
    }
    return true
  }

  static validateUsername (value) {
    Validation.inputCheckIsEmpty(value)
    const regex = /^[a-zA-Z ]{2,30}$/
    if (!regex.test(value)) {
      return 'This field must be a valid username'
    }
    return true
  }

  static validatePhone (value) {
    Validation.inputCheckIsEmpty(value)
    const regex = /^[/+]?[(]?[0-9]{3}[)]?[-\s/.]?[0-9]{3}[-\s/.]?[0-9]{4,6}$/im
    if (!regex.test(value)) {
      return 'This field must be a valid phone'
    }
    return true
  }

  static validateEmail (value) {
    Validation.inputCheckIsEmpty(value)
    const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i
    if (!regex.test(value)) {
      return 'This field must be a valid email'
    }
    return true
  }

  static validateWebsite (value) {
    Validation.inputCheckIsEmpty(value)
    const regex = /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._/+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_/+.~#?&//=]*)/g
    if (!regex.test(value)) {
      return 'This field must be a valid email'
    }
    return true
  }

  static validateCompany (value) {
    Validation.inputCheckIsEmpty(value)
    const regex = /^[a-zA-Z ]{2,30}$/
    if (!regex.test(value)) {
      return 'This field must be a valid company'
    }
    return true
  }

  static validateCity (value) {
    Validation.inputCheckIsEmpty(value)
    const regex = /^[a-zA-Z]+(?:[\s-][a-zA-Z]+)*$/
    if (!regex.test(value)) {
      return 'This field must be a valid city'
    }
    return true
  }

  static validateStreet (value) {
    Validation.inputCheckIsEmpty(value)
    const regex = /^[a-zA-Z]+(?:[\s-][a-zA-Z]+)*$/
    if (!regex.test(value)) {
      return 'This field must be a valid street'
    }
    return true
  }

  static validateSuite (value) {
    Validation.inputCheckIsEmpty(value)
    const regex = /^[a-zA-Z]+(?:[\s-][a-zA-Z]+)*$/
    if (!regex.test(value)) {
      return 'This field must be a valid suite'
    }
    return true
  }

  static validateZipcode (value) {
    Validation.inputCheckIsEmpty(value)
    const regex = /(^\d{5}$)|(^\d{5}-\d{4}$)/
    if (!regex.test(value)) {
      return 'This field must be a valid zipcode'
    }
    return true
  }
}
