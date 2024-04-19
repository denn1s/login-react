import { object, string, ref } from 'yup'
import Input from '@components/Input'
import Button from '@components/Button'
import useForm from '@hooks/useForm'
import './Login.css'


const schema = object({
  username: string().required().email(),
  password: string()
    .required()
    .matches(/[!#*]/, 'Password must contain !*#'),
  password2: string().required().oneOf([ref('password')], 'Passwords must match')
})

const Register = () => {
  const { values, setValue, validate, errors } = useForm(schema)

  const handleSubmit = async () => {
    console.log('Values:', values)

    if (await validate()) {
      console.log('form is valid')
      return
    }
    console.log('form is invalid')
    console.log('errors', errors)
  }

  return (
    <div className="login">
      <h1 className="title">Create a new account</h1>
      {
        errors?.generalError ? (
          <div className="error">
            {errors.generalError}
          </div>
        ) : null
      }
      <div className="input-container">
        <Input label="Email" name="username" type="text" value={values.username} onChange={(value) => {setValue('username', value)}} />
        { errors.username && <span className="er">{errors.username}</span> }
      </div>
      <div className="input-container">
        <Input label="Password" name="password" type="password" value={values.password} onChange={(value) => {setValue('password', value)}} />
        { errors.password && <span className="er">{errors.password}</span> }
      </div>
      <div className="input-container">
        <Input label="Repeat password" name="password2" type="password" value={values.password2} onChange={(value) => {setValue('password2', value)}} />
        { errors.password2 && <span className="er">{errors.password2}</span> }
      </div>
      <Button text="Register" onClick={handleSubmit} />
    </div>
  )
}

export default Register
