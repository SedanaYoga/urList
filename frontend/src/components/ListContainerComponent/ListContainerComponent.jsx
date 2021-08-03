import React from 'react'
import { useSelector } from 'react-redux'
import ListBoxComponent from '../ListBoxComponent/ListBoxComponent'
import { ListContainerStyled } from './ListContainerComponentStyled'
import { capitalize } from '../../helper/usefullFunc'
const ListContainerComponent = () => {
  const listAll = useSelector((state) => state.listAll)
  const { lists, checkedCheckbox, searchQueryList } = listAll
  const search = (data) => {
    const detailKey = data[0].details && Object.keys(data[0].details)
    return data.filter((list) =>
      detailKey.some(
        (key) =>
          list.details[key]
            .toString()
            .toLowerCase()
            .indexOf(searchQueryList.toLowerCase()) > -1
      )
    )
  }
  return (
    <ListContainerStyled>
      {checkedCheckbox.map((column, index) => (
        <div key={index} className="list-type division ">
          <div className="list-type title-box noselect">
            <p className="list-type-name">{capitalize(column)}</p>
            <div className="list-amount">
              <p>1</p>
            </div>
          </div>
          <div className="list-container noscrollbar">
            {search(lists)
              .filter((list) => list.type === column)
              .map(
                (list, index) =>
                  list.type === column && (
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
