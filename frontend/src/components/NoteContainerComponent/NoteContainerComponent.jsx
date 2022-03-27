import React, { useState } from 'react'
import SearchComponent from '../SearchComponent/SearchComponent'
import { NoteContainerStyled } from './NoteContainerComponentStyled'

const NoteContainerComponent = () => {
  const [textH, setTextH] = useState(50)
  const [inputText, setInputText] = useState('')
  const date = new Date()
  const [month, day, year] = [
    date.toLocaleString('default', { month: 'long' }),
    date.getDate(),
    date.getFullYear(),
  ]
  const textHChangeHandler = (e) => {
    setInputText(e.target.value)
  }
  const keyUpHandler = (e) => {
    inputText === '' ? setTextH(50) : setTextH(e.target.scrollHeight)
  }
  return (
    <NoteContainerStyled textH={textH}>
      <div className="header-note">
        <SearchComponent type="Daily Notes" />
        <div className="date-today flex-center">{`Today: ${month} ${day}, ${year}`}</div>
      </div>
      <div className="note-content"></div>
      <textarea
        placeholder="Write here..."
        value={inputText}
        onKeyUp={keyUpHandler}
        onChange={textHChangeHandler}
      ></textarea>
    </NoteContainerStyled>
  )
}

export default NoteContainerComponent
