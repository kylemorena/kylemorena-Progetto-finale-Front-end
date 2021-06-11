import React, { ChangeEvent, useState } from 'react'
import FormItem from 'components/molecules/formItem'
import { useDispatch } from 'react-redux'
import { SignUp } from 'redux/thunks/signup'
import IUserData from 'interfaces/Iuserdata'

const SingUpForm = () => {
  const dispatch = useDispatch()
  const [userData, setUserData] = useState<IUserData>({
    email:'',
    password:'',
  })

  // const dataContainer: IUserData = {
  //   email: '',
  //   password: ''
  // }

  const handleSubmit = (event: React.FormEvent<HTMLInputElement>) => {
    event.preventDefault()
    dispatch(SignUp(userData))
  }
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    // setUserData({
    // ...userData,
    // [e.target.id]: e.target.value || e.target.checked || 'nessun dato'
    // })
    setUserData((prevState) => {
      return { ...prevState, [e.target.id]: e.target.value }
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
