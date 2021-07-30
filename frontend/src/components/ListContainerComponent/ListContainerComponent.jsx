import React from 'react'
import { useSelector } from 'react-redux'
import ListBoxComponent from '../ListBoxComponent/ListBoxComponent'
import { ListContainerStyled } from './ListContainerComponentStyled'
const ListContainerComponent = () => {
  const columns = ['Account', 'Command', 'Note']
  const listAll = useSelector((state) => state.listAll.lists)
  return (
    <ListContainerStyled>
      {columns.map((column, index) => (
        <div key={index} className="list-type division">
          <div className="list-type title-box noselect">
            <p className="list-type-name">{column}</p>
            <div className="list-amount">
              <p>1</p>
            </div>
          </div>
          <div className="list-container">
            {listAll.map(
              (list, index) =>
                list.type === column.toLocaleLowerCase() && (
                  <ListBoxComponent key={index} theList={list} />
                )
            )}
          </div>
        </div>
      ))}
    </ListContainerStyled>
  )
}

export default ListContainerComponent
