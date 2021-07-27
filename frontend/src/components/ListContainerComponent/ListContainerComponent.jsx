import React from 'react'
import ListBoxComponent from '../ListBoxComponent/ListBoxComponent'
import { ListContainerStyled } from './ListContainerComponentStyled'
const ListContainerComponent = () => {
  const columns = ['Account', 'Command', 'Note']
  return (
    <ListContainerStyled>
      {columns.map((column, index) => (
        <div key={index} className="list-type division">
          <div className="list-type title-box">
            <p className="list-type-name">{column}</p>
            <div className="list-amount">
              <p>1</p>
            </div>
          </div>
          <div className="list-container">
            <ListBoxComponent />
          </div>
        </div>
      ))}
    </ListContainerStyled>
  )
}

export default ListContainerComponent
