// import { useHistory } from "react-router";
import React from 'react'
import { Redirect, RouteComponentProps } from 'react-router-dom'
import { auth } from 'utils/firebase'

const AuthControl: React.FC<RouteComponentProps<any>> = (props) => {
  console.log('file: index.tsx ~ line 8 ~ props', props)
  if (!auth.currentUser) {
    return <Redirect to='/signup' />
  }
  return <div></div>
}

export default AuthControl
