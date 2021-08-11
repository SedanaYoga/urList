import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { listAllLists } from '../../actions/listActions'
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
import DropdownComponent from '../../components/DropdownComponent/DropdownComponent'
import ButtonComponent from '../../components/ButtonComponent/ButtonComponent.jsx'
import HeaderComponent from '../../components/HeaderComponent/HeaderComponent'
import ListContainerComponent from '../../components/ListContainerComponent/ListContainerComponent'
import NoteContainerComponent from '../../components/NoteContainerComponent/NoteContainerComponent'
import LoaderComponent from '../../components/LoaderComponent/LoaderComponent'
import ModalComponent from '../../components/ModalComponent/ModalComponent'
import CreateListComponent from '../../components/CreateListComponent/CreateListComponent'
const DashboardScreen = () => {
  const [createModalIsOpen, setCreateModalIsOpen] = useState(false)
  const dispatch = useDispatch()

  const listAll = useSelector((state) => state.listAll)
  const { loading, error } = listAll

  const openCreateModalHandler = () => {
    setCreateModalIsOpen(true)
  }

  useEffect(() => {
    dispatch(listAllLists())
  }, [dispatch])

  return (
    <ContainerStyled>
      {/* LEFT BAR */}

      <LeftSideBarStyled>
        <div className="noselect">
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
            <Link to="/setting" className="menu-side">
              <SettingsSVG fill="gray" />
              <p>Settings</p>
            </Link>
          </MenuSideStyled>
          <FilterDropdownStyled>
            <DropdownComponent />
          </FilterDropdownStyled>
        </div>
        <div onClick={openCreateModalHandler}>
          <ButtonComponent>Create List</ButtonComponent>
        </div>
        {createModalIsOpen ? (
          <ModalComponent
            setModalIsOpen={setCreateModalIsOpen}
            ModalIsOpen={createModalIsOpen}
          >
            <CreateListComponent setCreateModalIsOpen={setCreateModalIsOpen} />
          </ModalComponent>
        ) : null}
      </LeftSideBarStyled>

      {/* MIDDLE BAR */}
      <MiddleSideBarStyled>
        {error && <div>{error.message}</div>}
        {loading ? (
          <LoaderComponent />
        ) : (
          <>
            <HeaderComponent type="Daily List" />
            <ListContainerComponent />
          </>
        )}
      </MiddleSideBarStyled>

      {/* RIGHT BAR */}

      <RightSideBarStyled>
        <HeaderComponent type="Daily Notes" />
        <NoteContainerComponent></NoteContainerComponent>
      </RightSideBarStyled>
    </ContainerStyled>
  )
}

export default DashboardScreen
