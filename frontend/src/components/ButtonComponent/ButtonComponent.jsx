import React from 'react'
import { ButtonStyled } from './ButtonComponentStyled'

const ButtonComponent = ({ children, clickFunc }) => {
  return <ButtonStyled onClick={clickFunc}>{children}</ButtonStyled>
}

export default ButtonComponent
