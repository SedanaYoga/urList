import React from 'react'
import { ListBoxStyled } from './ListBoxComponentStyled'
import { ReactComponent as TimeSVG } from '../../images/time-icon.svg'
import { ReactComponent as DeleteSVG } from '../../images/delete-icon.svg'
import { ReactComponent as EditSVG } from '../../images/edit-icon.svg'

const ListBoxComponent = () => {
  return (
    <ListBoxStyled>
      <div className="list-box">
        {/* LIST HEADER */}
        <div className="list-header">
          <div className="symbol-list">
            <p>🤝</p>
          </div>
          <div className="date-list">
            <div className="date-icon">
              <TimeSVG width="15" />
            </div>
            <p>March 07</p>
          </div>
          <div className="list-url click-fx noselect">
            <p className="url-icon">📍</p>
            <p>copyURL</p>
          </div>
        </div>

        {/* LIST BODY */}
        <div className="list-body flex-center">
          <div className="list-title flex-center">
            <p>[Sys] DGIT Hosted AWS Telflow System SSH</p>
          </div>
          <div className="list-username">
            <p>syoga</p>
          </div>
          <input
            type="text"
            value="docker exec -it consul_10_237_3_168 consul kv get -recurse
              telflow/app/tmf-622-"
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
