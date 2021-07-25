import React from 'react'
import {
  ContainerStyled,
  LeftSideBarStyled,
  LogoStyled,
  MiddleSideBarStyled,
  RightSideBarStyled,
  MenuSideStyled,
  FilterDropdownStyled,
} from './DashboardScreenStyled'
import { Link } from 'react-router-dom'
import { ReactComponent as DashboardSVG } from '../../images/dashboard-side.svg'
import { ReactComponent as SettingsSVG } from '../../images/settings-side.svg'
import { ReactComponent as AllActivitySVG } from '../../images/all-activity-side.svg'
import DropdownComponent from '../../components/DropdownComponent/DropdownComponent'
import ButtonComponent from '../../components/ButtonComponent/ButtonComponent.jsx'
import { ReactComponent as AddSVG } from '../../images/add-icon.svg'
import HeaderComponent from '../../components/HeaderComponent/HeaderComponent'
const DashboardScreen = () => {
  return (
    <ContainerStyled>
      <LeftSideBarStyled>
        <div>
          <LogoStyled>
            <img
              src="https://lh3.googleusercontent.com/wY5xafshzpNPsOZccfl7NdTceXtk-L3bjiBEX0PxvLzjeSHF2Tm1y3UdZSFYyNwDIz_hZjYNCjx_sE0qvEd1Co6y6u59Fw2BAXzr-upPJkwwET3A5NlWPVH2i1bdpmTueseox8x-iQ=w2400"
              alt="logo"
              width="34px"
              className="logo-icon"
            />
            <div className="logo-label">
              <p>urList App</p>
            </div>
          </LogoStyled>
          <MenuSideStyled>
            <Link to="/" className="menu-side">
              <DashboardSVG fill="black" width="22" />
              <p>Dashboard</p>
            </Link>
            <Link to="/" className="menu-side">
              <SettingsSVG fill="gray" />
              <p>Settings</p>
            </Link>
            <Link to="/" className="menu-side">
              <AllActivitySVG fill="black" />
              <p>All Activity</p>
            </Link>
          </MenuSideStyled>
          <FilterDropdownStyled>
            {/* <DropdownComponent /> */}
          </FilterDropdownStyled>
        </div>
        <ButtonComponent>
          <AddSVG style={{ marginRight: '0.5em' }} /> Create List
        </ButtonComponent>
      </LeftSideBarStyled>
      <MiddleSideBarStyled>
        <HeaderComponent type="Daily Notes" />
        <div className="dailylist-content"></div>
      </MiddleSideBarStyled>
      <RightSideBarStyled>
        <HeaderComponent />
        <div className="dailynotes-content"></div>
      </RightSideBarStyled>
    </ContainerStyled>
  )
}

export default DashboardScreen
