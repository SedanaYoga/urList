import styled from 'styled-components'

export const ButtonStyled = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 250px;
  height: 50px;
  border: 3px solid ${(props) => props.theme.buttonColor};
  outline: none;
  background: #fff;
  color: ${(props) => props.theme.buttonColor};
  font-size: 22px;
  border-radius: 17px;
  font-weight: 700;
  cursor: pointer;
  transition: all 300ms ease-out;
  :hover {
    background: ${(props) => props.theme.buttonColor};
    color: #fff;
    svg {
      fill: #fff;
    }
    :active {
      transition: none;
      background: #fff;
      color: ${(props) => props.theme.buttonColor};
      svg {
        fill: ${(props) => props.theme.buttonColor};
      }
    }
  }
  svg {
    fill: ${(props) => props.theme.buttonColor};
  }
`
