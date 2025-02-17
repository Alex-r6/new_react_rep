import React, { useState } from 'react'
import { Pass_input } from './Pass_input'


export const New_func = () => {
    const [password, setPassword] = useState('')
  return (
    <>
        <Pass_input type="password" change={setPassword} value={password} rool={{ is : false}}/>
    </>
  )
}
