import React from 'react'
import { useSelector } from 'react-redux'
import ListBoxComponent from '../ListBoxComponent/ListBoxComponent'
import { ListContainerStyled } from './ListContainerComponentStyled'
import { capitalize, sortByKey } from '../../helper/usefullFunc'
const ListContainerComponent = () => {
  const listAll = useSelector((state) => state.listAll)
  const { lists, checkedCheckbox, searchQueryList } = listAll
  const search = (data) => {
    const detailKey = ['name', 'url', 'userName', 'theDetail']
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
      {lists
        ? checkedCheckbox.map((column, index) => (
            <div key={index} className="list-type division ">
              <div className="list-type title-box noselect">
                <p className="list-type-name">{capitalize(column)}</p>
                <div className="list-amount">
                  <p>
                    {
                      search(lists).filter((list) => list.type === column)
                        .length
                    }
                  </p>
                </div>
              </div>
              <div className="list-container noscrollbar">
                {sortByKey(search(lists), `updatedAt`)
                  .filter((list) => {
                    return list.type === column
                  })
                  .map((list, index) => {
                    return (
                      list.type === column && (
                        <ListBoxComponent key={index} theList={list} />
                      )
                    )
                  })}
              </div>
            </div>
          ))
        : null}
    </ListContainerStyled>
  )
}

export default ListContainerComponent
