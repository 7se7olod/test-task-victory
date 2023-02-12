<template>
  <Form @submit="onSubmit" class="user-form">
    <div class="user-form-inputs">
      <div v-for="field in fields"
           :key="field.name">
        <label class="user-label"
               v-if="field.name !== 'Suite' && field.name !== 'Zipcode'">
          {{ field.name }}
          <Field :name=field.name.toLowerCase()
                 type="text"
                 :rules=field.rules
                 class="user-input"/>
          <ErrorMessage class="user-input-error"
                        :name=field.name.toLowerCase() />
        </label>
        <div class="user-form-item" v-if="field.name === 'Suite'">
          <label class="user-label">
            Suite
            <Field name="suite"
                   type="text"
                   :rules="this.validation.validateSuite"
                   class="user-input"/>
            <ErrorMessage class="user-input-error"
                          name="suite"/>
          </label>
          <label class="user-label">
            Zipcode
            <Field name="zipcode"
                   type="text"
                   :rules="this.validation.validateZipcode"
                   class="user-input"/>
            <ErrorMessage class="user-input-error"
                          name="zipcode"/>
          </label>
        </div>
      </div>
    </div>
    <user-button>Create user</user-button>
  </Form>
</template>

<script>
import UserButton from '@/components/UI/UserButton'
import { ErrorMessage, Field, Form } from 'vee-validate'
import { Validation } from '@/helpers/Validation'

export default {
  name: 'UserForm',
  components: {
    UserButton,
    Form,
    ErrorMessage,
    Field
  },
  data () {
    return {
      validation: Validation,
      fields: [
        {
          name: 'Name',
          rules: Validation.validateName
        },
        {
          name: 'Username',
          rules: Validation.validateUsername
        },
        {
          name: 'Email',
          rules: Validation.validateEmail
        },
        {
          name: 'Phone',
          rules: Validation.validatePhone
        },
        {
          name: 'Website',
          rules: Validation.validateWebsite
        },
        {
          name: 'City',
          rules: Validation.validateCity
        },
        {
          name: 'Street',
          rules: Validation.validateStreet
        },
        {
          name: 'Company',
          rules: Validation.validateCompany
        },
        {
          name: 'Suite',
          rules: Validation.validateSuite
        },
        {
          name: 'Zipcode',
          rules: Validation.validateZipcode
        }
      ]
    }
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
