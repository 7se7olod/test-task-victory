<template>
  <Form @submit="onSubmit" class="user-form">
    <div class="user-form-inputs">
      <label class="user-label">Name
        <Field name="name" type="text" :rules="validateName" class="user-input"/>
        <ErrorMessage class="user-input-error" name="name"/>
      </label>
      <label class="user-label">Username
        <Field name="username" type="text" :rules="validateUsername" class="user-input"/>
        <ErrorMessage class="user-input-error" name="username"/>
      </label>
      <label class="user-label">Email
        <Field name="email" type="email" :rules="validateEmail" class="user-input"/>
        <ErrorMessage class="user-input-error" name="email"/>
      </label>
      <label class="user-label">Phone
        <Field name="phone" type="tel" :rules="validatePhone" class="user-input"/>
        <ErrorMessage class="user-input-error" name="phone"/>
      </label>
      <label class="user-label">Website
        <Field name="website" type="text" :rules="validateWebsite" class="user-input"/>
        <ErrorMessage class="user-input-error" name="website"/>
      </label>
      <label class="user-label">Company
        <Field name="company" type="text" :rules="validateCompany" class="user-input"/>
        <ErrorMessage class="user-input-error" name="company"/>
      </label>
      <label class="user-label">City
        <Field name="city" type="text" :rules="validateCity" class="user-input"/>
        <ErrorMessage class="user-input-error" name="city"/>
      </label>
      <label class="user-label">Street
        <Field name="street" type="text" :rules="validateStreet" class="user-input"/>
        <ErrorMessage class="user-input-error" name="street"/>
      </label>
      <div class="user-form-item">
        <label class="user-label">Suite
          <Field name="suite" type="text" :rules="validateSuite" class="user-input"/>
          <ErrorMessage class="user-input-error" name="suite"/>
        </label>
        <label class="user-label">Zipcode
          <Field name="zipcode" type="text" :rules="validateZipcode" class="user-input"/>
          <ErrorMessage class="user-input-error" name="zipcode"/>
        </label>
      </div>
    </div>
    <user-button>Create user</user-button>
  </Form>
</template>

<script>
import UserButton from '@/components/UI/UserButton'
import { Form, Field, ErrorMessage } from 'vee-validate'

export default {
  name: 'UserForm',
  components: {
    UserButton,
    ErrorMessage,
    Form,
    Field
  },
  methods: {
    onSubmit (result) {
      this.sendUser(result)
    },
    async sendUser (newUser) {
      const url = 'https://jsonplaceholder.typicode.com/users'
      try {
        const response = await fetch(url, {
          method: 'POST',
          headers: {
            'Content-type': 'application/json; charset=UTF-8'
          },
          body: JSON.stringify(newUser)
        })
        const result = await response.json()
        console.log('Success:', result)
        this.$router.push('/')
      } catch (error) {
        console.log('Error:', error)
      }
    },
    inputCheckIsEmpty (valueInput) {
      if (!valueInput) {
        return 'This field is required'
      }
    },
    validateName (value) {
      this.inputCheckIsEmpty(value)
      const regex = /^[a-zA-Z ]{2,30}$/
      if (!regex.test(value)) {
        return 'This field must be a valid name'
      }
      return true
    },
    validateUsername (value) {
      this.inputCheckIsEmpty(value)
      const regex = /^[a-zA-Z ]{2,30}$/
      if (!regex.test(value)) {
        return 'This field must be a valid username'
      }
      return true
    },
    validatePhone (value) {
      this.inputCheckIsEmpty(value)
      const regex = /^[/+]?[(]?[0-9]{3}[)]?[-\s/.]?[0-9]{3}[-\s/.]?[0-9]{4,6}$/im
      if (!regex.test(value)) {
        return 'This field must be a valid phone'
      }
      return true
    },
    validateEmail (value) {
      this.inputCheckIsEmpty(value)
      const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i
      if (!regex.test(value)) {
        return 'This field must be a valid email'
      }
      return true
    },
    validateWebsite (value) {
      this.inputCheckIsEmpty(value)
      const regex = /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._/+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_/+.~#?&//=]*)/g
      if (!regex.test(value)) {
        return 'This field must be a valid email'
      }
      return true
    },
    validateCompany (value) {
      this.inputCheckIsEmpty(value)
      const regex = /^[a-zA-Z ]{2,30}$/
      if (!regex.test(value)) {
        return 'This field must be a valid company'
      }
      return true
    },
    validateCity (value) {
      this.inputCheckIsEmpty(value)
      const regex = /^[a-zA-Z]+(?:[\s-][a-zA-Z]+)*$/
      if (!regex.test(value)) {
        return 'This field must be a valid city'
      }
      return true
    },
    validateStreet (value) {
      this.inputCheckIsEmpty(value)
      const regex = /^[a-zA-Z]+(?:[\s-][a-zA-Z]+)*$/
      if (!regex.test(value)) {
        return 'This field must be a valid street'
      }
      return true
    },
    validateSuite (value) {
      this.inputCheckIsEmpty(value)
      const regex = /^[a-zA-Z]+(?:[\s-][a-zA-Z]+)*$/
      if (!regex.test(value)) {
        return 'This field must be a valid suite'
      }
      return true
    },
    validateZipcode (value) {
      this.inputCheckIsEmpty(value)
      const regex = /(^\d{5}$)|(^\d{5}-\d{4}$)/
      if (!regex.test(value)) {
        return 'This field must be a valid zipcode'
      }
      return true
    }
  }
}
</script>

<style scoped>

.user-form-inputs {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 1fr 1fr 1fr;
  grid-row-gap: 32px;
  grid-column-gap: 20px;
  margin-bottom: 48px;
}

.user-form-item {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 20px;
}

.user-label {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  color: #000000;
  gap: 8px;
  position: relative;
}

.user-input {
  border: none;
  background-color: #FFFFFF;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  height: 40px;
  width: 100%;
}

.user-input-error {
  position: absolute;
  bottom: -25px;
  left: 0;
  color: red;
  font-size: 10px;
}

@media screen and (max-width: 850px) {
  .user-form-inputs {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media screen and (max-width: 490px) {
  .user-form-inputs {
    display: flex;
    flex-direction: column;
  }

  .user-form-item {
    display: flex;
    flex-direction: column;
    gap: 32px;
  }
}

</style>
