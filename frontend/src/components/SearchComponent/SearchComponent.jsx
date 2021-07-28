import React, { useState } from 'react'
import { SearchStyled } from './SearchComponentStyled'

const SearchComponent = ({ type }) => {
  const [search, setSearch] = useState({ open: false, searchText: '' })
  const searchHandler = () => {
    setSearch({ ...search, open: !search.open })
  }
  const searchTextHandler = (e) => {
    setSearch({ ...search, searchText: e.target.value })
  }
  const clearSearchHandler = () => {
    setSearch({ ...search, searchText: '' })
    if (search.searchText === '' && search.open === true) {
      setSearch({ ...search, open: false })
    }
  }

  return (
    <SearchStyled type={type}>
      <div
        className={`search ${
          search.open || type === 'Daily Notes' ? 'active' : 'click-fx'
        }`}
      >
        <div
          className={`${
            type === 'Daily List' ? 'icon' : type === 'Daily Notes' && 'icon-sm'
          }`}
          onClick={searchHandler}
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
            value={search.searchText}
            onChange={searchTextHandler}
            placeholder="Search..."
            id="mysearch"
            className="bw-selection"
          />
        </div>
        <span
          className={`${
            type === 'Daily List'
              ? 'clear'
              : type === 'Daily Notes' && 'clear-sm'
          }`}
          onClick={clearSearchHandler}
        ></span>
      </div>
    </SearchStyled>
  )
}

export default SearchComponent
