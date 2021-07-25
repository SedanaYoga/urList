import React from 'react'
import { ButtonStyled } from './ButtonComponentStyled'

const ButtonComponent = ({ children }) => {
  return <ButtonStyled>{children}</ButtonStyled>
}

export default ButtonComponent
