import styled from 'styled-components'

export const DropdownComponentStyled = styled.div`
  --bg: #242526;
  --bg-accent: #484a4d;
  --text-color: #dadce1;
  --nav-size: 60px;
  --border: 1px solid #474a4d;
  --border-radius: 8px;
  --speed: 500ms;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background: ${(props) => props.theme.color1};
  padding-left: 27px;
  width: 250px;
  min-height: 50px;
  border-radius: 17px;
  .nav-item {
    width: auto;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  a {
    color: var(--text-color);
    text-decoration: none;
  }
  .filter-icon {
    margin-left: 19px;
  }
  p {
    font-size: 22px;
    font-weight: 600;
    margin-left: 0.3em;
  }

  /* Icon Button */
  .icon-button {
    display: flex;
    align-items: center;
    justify-content: center;
    transition: filter 300ms;
    transform: ${(props) =>
      !props.open ? `rotate(-0.25turn)` : `rotate(0turn)`};
  }

  .icon-button svg:hover {
    filter: brightness(2);
  }

  .icon-button svg {
    fill: #555;
    width: 22px;
    height: 22px;
  }

  /* Dropdown Menu */

  .dropdown {
    position: absolute;
    top: 335px;
    width: 250px;
    height: 0;
    transform: translateX(15.5%);
    background-color: ${(props) => props.theme.color1};
    border-radius: 0 0 17px 17px;
    /* padding: 1rem; */
    padding: 0rem;
    overflow: hidden;
    transition: all 1s ease;
  }
  .dropdown.active {
    padding: 1rem;
    height: auto;
  }
`
export const CheckboxStyled = styled.div`
  display: flex;
  flex-direction: row;
  height: 50px;
  display: flex;
  align-items: center;
  border-radius: var(--border-radius);
  transition: background var(--speed);
  padding: 0.5rem;
  color: black;
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
  :hover {
    background-color: #525357;
    label p {
      color: #cdcdcd;
    }
  }
  .checkbox-container {
    display: flex;
    align-items: center;
    position: relative;
    padding-left: 35px;
    cursor: pointer;
    width: 100%;
    height: 50px;
    color: #a7a7a7;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }
  .checkbox-container p {
    font-size: 18px;
    font-weight: 700;
    color: black;
  }
  .checkbox-container input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }
  .checkmark {
    position: absolute;
    top: 17px;
    left: 7px;
    height: 17px;
    width: 17px;
    background-color: #ffffff;
    border: 2px solid #cdcdcd;
    border-radius: 50%;
  }
  .checkbox-container:hover input ~ .checkmark {
    background-color: #cdcdcd;
  }
  .checkbox-container input:checked ~ .checkmark {
    background-color: #7a7a7a;
  }
`
