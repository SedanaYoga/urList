import React, { useState } from 'react'
import { SearchStyled } from './SearchComponentStyled'
import { useDispatch, useSelector } from 'react-redux'
import { LIST_GET_ALL_SEARCH } from '../../constants/listConstant'

const SearchComponent = ({ type }) => {
  const dispatch = useDispatch()
  const searchQueryList = useSelector((state) => state.listAll.searchQueryList)

  const [searchOpen, setSearchOpen] = useState(false)
  const searchOpenHandler = () => {
    setSearchOpen(true)
  }
  const searchTextHandler = (e) => {
    dispatch({ type: LIST_GET_ALL_SEARCH, payload: e.target.value })
  }
  const clearSearchHandler = () => {
    searchQueryList && dispatch({ type: LIST_GET_ALL_SEARCH, payload: '' })
    if (searchQueryList === '' && searchOpen === true) {
      setSearchOpen(false)
    }
  }

  return (
    <SearchStyled type={type}>
      <div
        className={`search ${
          searchOpen || type === 'Daily Notes' ? 'active' : 'click-fx'
        }`}
      >
        <div
          className={`${
            type === 'Daily List' ? 'icon' : type === 'Daily Notes' && 'icon-sm'
          }`}
          onClick={searchOpenHandler}
        ></div>
        <div
          className={`${
            type === 'Daily List'
              ? 'input'
              : type === 'Daily Notes' && 'input-sm'
          }`}
        >
          <input
            type="text"
            value={type === 'Daily List' ? searchQueryList : ''}
            onChange={searchTextHandler}
            placeholder="Search..."
            className="bw-selection"
            autoComplete="off"
          />
        </div>
        <span
          className={`${
            type === 'Daily List'
              ? 'clear'
              : type === 'Daily Notes' && 'clear-sm'
          }`}
          onClick={type === 'Daily List' ? clearSearchHandler : null}
        ></span>
      </div>
    </SearchStyled>
  )
}

export default SearchComponent
