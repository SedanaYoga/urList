import React, { useState } from 'react'
import {
  HeaderStyled,
  RoundGroupStyled,
  SearchDailyListStyled,
  NotifDailyListStyled,
} from './HeaderComponentStyled'
import { ReactComponent as CheckSVG } from '../../images/check-icon.svg'
import { ReactComponent as NotifSVG } from '../../images/notif-icon.svg'

const SearchDailyList = () => {
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
    <SearchDailyListStyled>
      <div className={`search ${search.open ? 'active' : ''}`}>
        <div className="icon" onClick={searchHandler}></div>
        <div className="input">
          <input
            type="text"
            value={search.searchText}
            onChange={searchTextHandler}
            placeholder="Search..."
            id="mysearch"
          />
        </div>
        <span className="clear" onClick={clearSearchHandler}></span>
      </div>
    </SearchDailyListStyled>
  )
}

const NotifDailyList = () => {
  return (
    <NotifDailyListStyled>
      <NotifSVG />
    </NotifDailyListStyled>
  )
}

const ProfileDailyList = () => {
  return (
    <>
      <img
        src="https://lh3.googleusercontent.com/ezXdW_b3ApcPZfFcy2bhP8J8UqLMLPOsK86fwg5swxdTrVJgP54WYCTQhoJGsKnWvmeTAYpqpU6aPDnrC0GXU6wL8gHKZnzBxPPy14MAPnYzkJALKwUZsJo01bfQdtteYA2p9je0fA=w2400"
        alt="profile-pic"
        width="70px"
      />
    </>
  )
}

const RoundGroupComponent = () => {
  return (
    <>
      {/* Search Section is separated from Notification and Profile */}
      <div className="search-dailylist">
        <SearchDailyList />
      </div>
      <RoundGroupStyled>
        <div className="wh-60 notif-dailylist">
          <NotifDailyList />
        </div>
        <div className="wh-70 profile-dailylist">
          <ProfileDailyList />
        </div>
      </RoundGroupStyled>
    </>
  )
}

const HeaderComponent = ({ type }) => {
  return (
    <HeaderStyled>
      <div className="title-dailylist">
        {type === 'Daily List' ? (
          <span>
            <CheckSVG /> Daily List
          </span>
        ) : (
          <span>📃 Daily Notes</span>
        )}
      </div>
      {type === 'Daily List' && <RoundGroupComponent />}
    </HeaderStyled>
  )
}

export default HeaderComponent
