import React from 'react'
import { Header } from '@components/header'
import { useNavigate } from 'react-router-dom'
import SignUpbox from '@components/sign-up-box'
export function SignUp() {

  
  // Html daqui pra baixo
  return (
    <main>
      <Header />
        <SignUpbox/>
    </main>
  )
}

export default SignUp