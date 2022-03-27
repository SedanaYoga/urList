import React, { useState, useRef, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { LIST_GET_ALL_CHECKED } from '../../constants/listConstant'
import { ReactComponent as CaretIcon } from '../../images/caret.svg'
import { ReactComponent as FilterIcon } from '../../images/filter-icon.svg'
import {
  CheckboxStyled,
  DropdownComponentStyled,
} from './DropdownComponentStyled'

const DropdownMenu = ({ hook }) => {
  const dispatch = useDispatch()
  const prevChecked = useRef([])
  const listAll = useSelector((state) => state.listAll)
  const { lists, checkedCheckbox } = listAll
  const listType = [...new Set(lists.map((list) => list.type))]
  const typeAlias = {
    account: '🤝 Account',
    command: '👏 Command',
    note: '✍ Note',
  }
  useEffect(() => {
    prevChecked.current = checkedCheckbox
  }, [checkedCheckbox])

  return (
    <div className={`dropdown ${hook.open ? 'active' : ''}`}>
      <div className="menu">
        {listType.map((type, index) => (
          <CheckboxStyled key={index}>
            <label key={index} className="checkbox-container">
              <p>{typeAlias[type]}</p>
              <input
                key={index}
                type="checkbox"
                checked={checkedCheckbox.includes(type)}
                onChange={(e) => {
                  const checked = checkedCheckbox.includes(type)
                  dispatch({
                    type: LIST_GET_ALL_CHECKED,
                    payload: (checked
                      ? prevChecked.current.filter(
                          (alreadyChecked) => alreadyChecked !== type
                        )
                      : [...prevChecked.current, type]
                    ).sort(),
                  })
                }}
              />
              <span className="checkmark"></span>
            </label>
          </CheckboxStyled>
        ))}
      </div>
    </div>
  )
}

const NavItem = ({ icon, children, hook }) => {
  return (
    <li className="nav-item">
      <div className="icon-button" onClick={() => hook.setOpen(!hook.open)}>
        {icon}
      </div>
      <FilterIcon className="filter-icon" />
      <p>Filter</p>
      {hook.open && children}
    </li>
  )
}

const DropdownComponent = () => {
  const [open, setOpen] = useState(true)
  return (
    <DropdownComponentStyled open={open}>
      <NavItem icon={<CaretIcon />} hook={{ open, setOpen }}>
        <DropdownMenu hook={{ open, setOpen }}></DropdownMenu>
      </NavItem>
    </DropdownComponentStyled>
  )
}

export default DropdownComponent
