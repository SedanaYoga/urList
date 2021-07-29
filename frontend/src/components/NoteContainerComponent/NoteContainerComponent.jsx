import React from 'react'
import SearchComponent from '../SearchComponent/SearchComponent'
import { NoteContainerStyled } from './NoteContainerComponentStyled'

const NoteContainerComponent = () => {
  const date = new Date()
  const [month, day, year] = [
    date.toLocaleString('default', { month: 'long' }),
    date.getDate(),
    date.getFullYear(),
  ]
  return (
    <NoteContainerStyled>
      <div className="header-note">
        <SearchComponent type="Daily Notes" />
        <div className="date-today flex-center">{`Today: ${month} ${day}, ${year}`}</div>
      </div>
      <div className="note-content"></div>
      <div className="input-note">
        <textarea placeholder="Write here..."></textarea>
      </div>
    </NoteContainerStyled>
  )
}

export default NoteContainerComponent
