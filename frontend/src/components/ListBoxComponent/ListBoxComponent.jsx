import React, { useState } from 'react'
import { ListBoxStyled } from './ListBoxComponentStyled'
// import { useDispatch, useSelector } from 'react-redux'
import { ReactComponent as TimeSVG } from '../../images/time-icon.svg'
import { ReactComponent as DeleteSVG } from '../../images/delete-icon.svg'
import { ReactComponent as EditSVG } from '../../images/edit-icon.svg'
import { CopyToClipboard } from 'react-copy-to-clipboard'

const ListBoxComponent = ({ theList }) => {
  const [copiedUrl, setCopiedUrl] = useState(false)
  const [copiedUname, setCopiedUname] = useState(false)
  const [copiedDetail, setCopiedDetail] = useState(false)
  const listIcon = { account: '🤝', command: '👏', note: '✍' }
  const { details } = theList

  const updatedTime = new Date(theList.updatedAt)
  const [month, day, year] = [
    updatedTime.toLocaleString('default', { month: 'short' }),
    updatedTime.getDate(),
    updatedTime.getFullYear(),
  ]
  const updatedWeekday = updatedTime.toLocaleString('default', {
    weekday: 'long',
  })
  return (
    <ListBoxStyled uName={details.userName} day={updatedWeekday}>
      <div className="list-box">
        {/* LIST HEADER */}
        <div className="list-header">
          <div className="symbol-list">
            <p>{listIcon[theList.type]}</p>
          </div>
          <div className="header-right flex-center">
            {details.url && (
              <CopyToClipboard
                text={details.url}
                onCopy={() => setCopiedUrl(true)}
              >
                <div
                  className="list-url click-fx noselect"
                  onClick={setTimeout(() => setCopiedUrl(false), 2000)}
                >
                  <p className="url-icon">📍</p>
                  <p>{!copiedUrl ? `copyURL` : 'copied'}</p>
                </div>
              </CopyToClipboard>
            )}
            <div className="date-list noselect">
              <div className="date-icon">
                <TimeSVG width="15" />
              </div>
              <p>{`${month} ${day}, ${year}`}</p>
            </div>
          </div>
        </div>

        {/* LIST BODY */}
        <div className="list-body flex-center">
          <div className="list-title flex-center">
            <p>{details.name}</p>
            <span className="line-title"></span>
          </div>
          {details.userName && (
            <CopyToClipboard
              text={details.userName}
              onCopy={() => setCopiedUname(true)}
            >
              <div
                className="list-username"
                onClick={setTimeout(() => setCopiedUname(false), 2000)}
              >
                <p>{!copiedUname ? details.userName : 'copied'}</p>
              </div>
            </CopyToClipboard>
          )}
          <CopyToClipboard
            text={details.theDetail}
            onCopy={() => setCopiedDetail(true)}
          >
            <input
              type={
                theList.type !== 'account'
                  ? `text`
                  : !copiedDetail
                  ? `password`
                  : `text`
              }
              onClick={setTimeout(() => setCopiedDetail(false), 2000)}
              value={!copiedDetail ? details.theDetail : 'copied!'}
              readOnly
              className="list-detail flex-center bw-selection"
            ></input>
          </CopyToClipboard>
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
