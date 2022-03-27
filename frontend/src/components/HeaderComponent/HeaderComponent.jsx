import React from 'react'
import {
  HeaderStyled,
  RoundGroupStyled,
  NotifDailyListStyled,
} from './HeaderComponentStyled'
import { ReactComponent as CheckSVG } from '../../images/check-icon.svg'
import { ReactComponent as NotifSVG } from '../../images/notif-icon.svg'
import SearchComponent from '../SearchComponent/SearchComponent'

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
        <SearchComponent type="Daily List" />
      </div>
      <RoundGroupStyled>
        <div className="wh-60 notif-dailylist click-fx">
          <NotifDailyList />
        </div>
        <div className="wh-70 profile-dailylist click-fx noselect">
          <ProfileDailyList />
        </div>
      </RoundGroupStyled>
    </>
  )
}

const HeaderComponent = ({ type }) => {
  return (
    <HeaderStyled>
      <div className="title-dailylist noselect">
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
