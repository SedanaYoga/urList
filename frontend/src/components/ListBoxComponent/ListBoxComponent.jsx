import React from 'react'
import { ListBoxStyled } from './ListBoxComponentStyled'
// import { useDispatch, useSelector } from 'react-redux'
// import { ReactComponent as TimeSVG } from '../../images/time-icon.svg'
import { ReactComponent as DeleteSVG } from '../../images/delete-icon.svg'
import { ReactComponent as EditSVG } from '../../images/edit-icon.svg'

const ListBoxComponent = ({ theList }) => {
  // const dispatch = useDispatch()

  // const columnType = colType.toLowerCase()
  // const listAll = useSelector((state) => state.listAll)
  // const { _id, type, details } = listAll.lists
  const { details } = theList
  return (
    <ListBoxStyled>
      <div className="list-box">
        {/* LIST HEADER */}
        <div className="list-header">
          <div className="symbol-list">
            <p>🤝</p>
          </div>
          {/* <div className="date-list">
            <div className="date-icon">
              <TimeSVG width="15" />
            </div>
            <p>March 07</p>
          </div> */}
          {details.url && (
            <div className="list-url click-fx noselect">
              <p className="url-icon">📍</p>
              <p>copyURL</p>
            </div>
          )}
        </div>

        {/* LIST BODY */}
        <div className="list-body flex-center">
          <div className="list-title flex-center">
            <p>{details.name}</p>
            <span className="line-title"></span>
          </div>
          <div className="list-username">
            {details.userName && <p>{details.userName}</p>}
          </div>
          <input
            type="text"
            value={details.theDetail}
            readOnly
            className="list-detail flex-center bw-selection"
          ></input>
          <div className="modif-list flex-center">
            <div className="edit-list rounded-btn flex-center click-fx">
              <EditSVG />
            </div>
            <div className="delete-list rounded-btn flex-center click-fx">
              <DeleteSVG />
            </div>
          </div>
        </div>
      </div>
    </ListBoxStyled>
  )
}

export default ListBoxComponent
