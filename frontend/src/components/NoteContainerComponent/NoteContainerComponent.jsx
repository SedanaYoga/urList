import React from 'react'
import SearchComponent from '../SearchComponent/SearchComponent'
import { NoteContainerStyled } from './NoteContainerComponentStyled'

const NoteContainerComponent = () => {
  return (
    <NoteContainerStyled>
      <SearchComponent type="Daily Notes" />
    </NoteContainerStyled>
  )
}

export default NoteContainerComponent
