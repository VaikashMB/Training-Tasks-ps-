import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import {useRecoilValue, atom} from "recoil"



const usernameState = atom({
  key: 'username',
  default: 'User'
})

const passwordState = atom({
  key: 'password',
  default: ''
})
const emailState = atom({
  key: 'email',
  default: ''
})

const CandidateInfo = () => {

  const username = useRecoilValue(usernameState)

  const password = useRecoilValue(passwordState)

  const email = useRecoilValue(emailState)



  return (
    <div>
      <Header />
      <div>
        <p>Username : {username}</p>
        <p>Password : {password} </p>
        <p>Email : {email} </p>
      </div>
      <Footer />
    </div>
  )
}

export default CandidateInfo