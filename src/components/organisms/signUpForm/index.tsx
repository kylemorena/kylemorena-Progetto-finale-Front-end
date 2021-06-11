import React, { ChangeEvent, useState } from 'react'
import FormItem from 'components/molecules/formItem'
import { useDispatch } from 'react-redux'
import { SignUp } from 'redux/thunks/signup'

const SingUpForm = () => {
  const dispatch = useDispatch()
  const [userData, setUserData] = useState({})
  console.log('file: index.tsx ~ line 9 ~ SingUpForm ~ userData', userData)

  const handleSubmit = (event: React.FormEvent<HTMLInputElement>) => {
    event.preventDefault()
    dispatch(SignUp({ email: 'ciaone@gmail.com', password: '21312dasdasd' }))
  }
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUserData({
      ...userData,
      [e.target.id]: e.target.value || e.target.checked || 'nessun dato'
    })
  }

  return (
    <FormItem
      buttonText='Sing up'
      linkText='Already have an account? Sign in'
      toLink='/login'
      onSubmitProp={handleSubmit}
      onChangeProp={handleChange}
    />
  )
}

export default SingUpForm
