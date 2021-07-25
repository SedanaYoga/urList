import styled from 'styled-components'

export const ButtonStyled = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 250px;
  height: 50px;
  border: none;
  outline: none;
  background: ${(props) => props.theme.buttonColor};
  color: white;
  font-size: 22px;
  border-radius: 17px;
  font-weight: 700;
  cursor: pointer;
  transition: all 300ms ease-out;
  :hover {
    filter: brightness(1.3);
    :active {
      filter: brightness(0.8);
    }
  }
`
