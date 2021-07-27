import React, { useState } from 'react'
import { ReactComponent as CaretIcon } from '../../images/caret.svg'
import { ReactComponent as FilterIcon } from '../../images/filter-icon.svg'
import {
  CheckboxStyled,
  DropdownComponentStyled,
} from './DropdownComponentStyled'

const DropdownMenu = ({ hook }) => {
  function DropdownItem({ children }) {
    return (
      <CheckboxStyled>
        <label className="checkbox-container">
          <p>{children}</p>
          <input type="checkbox" />
          <span className="checkmark"></span>
        </label>
      </CheckboxStyled>
    )
  }

  return (
    <div className={`dropdown ${hook.open ? 'active' : ''}`}>
      <div className="menu">
        <DropdownItem>🤝 Account</DropdownItem>
        <DropdownItem>👏 Command</DropdownItem>
        <DropdownItem>✍ Note</DropdownItem>
      </div>
    </div>
  )
}

const NavItem = ({ icon, children, hook }) => {
  return (
    <li className="nav-item">
      <a
        href="localhost:5000"
        className="icon-button"
        onClick={() => hook.setOpen(!hook.open)}
      >
        {icon}
      </a>
      <FilterIcon className="filter-icon" />
      <p>Filter</p>
      {hook.open && children}
    </li>
  )
}

const DropdownComponent = () => {
  const [open, setOpen] = useState(true)

  return (
    <DropdownComponentStyled>
      <NavItem icon={<CaretIcon />} hook={{ open, setOpen }}>
        <DropdownMenu hook={{ open, setOpen }}></DropdownMenu>
      </NavItem>
    </DropdownComponentStyled>
  )
}

export default DropdownComponent
