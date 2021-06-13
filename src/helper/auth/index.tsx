// import { useHistory } from "react-router";
import React from 'react'
import { Redirect, RouteComponentProps } from 'react-router-dom'
import { auth } from 'utils/firebase'

const AuthControl: React.FC<RouteComponentProps<any>> = (props) => {
  console.log('file: index.tsx ~ line 8 ~ props', props)
  //TODO: quando currentUser esiste il redirect funziona, ma quando non esiste devo fare un'implementazione su return al momento renderizzo direttamente il figlio, ma sarebbe meglio se lo portassi direttamente sulla pagina
  if (!auth.currentUser) {
    return <Redirect to='/signup' />
  }
  return <>{props.children}</>
}

export default AuthControl
