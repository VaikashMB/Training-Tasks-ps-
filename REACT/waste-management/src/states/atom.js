import { atom } from "recoil"
 
export const usernameState = atom({
    key: 'username',
    default: 'User'
  })

  export const emailState = atom({
    key: 'email',
    default: ''
  })


  export const wasteState = atom({
    key: 'waste',
    default: ''
  })


  export const timeState = atom({
    key: 'time',
    default: ''
  })


  export const addressState = atom({
    key: 'address',
    default: ''
  })

