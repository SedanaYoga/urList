import React, { useState } from 'react'
import { ExpandNoteStyled, ListBoxStyled } from './ListBoxComponentStyled'
import { useDispatch } from 'react-redux'
import { ReactComponent as TimeSVG } from '../../images/time-icon.svg'
import { ReactComponent as DeleteSVG } from '../../images/delete-icon.svg'
import { ReactComponent as EditSVG } from '../../images/edit-icon.svg'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import { decryptData } from '../../helper/secure'
import { listAllLists, deleteAList } from '../../actions/listActions'
import ModalComponent from '../ModalComponent/ModalComponent'
import UpdateListComponent from '../UpdateListComponent/UpdateListComponent'
import ReactMarkdown from 'react-markdown'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { materialOceanic } from 'react-syntax-highlighter/dist/cjs/styles/prism'

const ExpandNoteComponent = ({ outputDetail, noteName }) => {
  const components = {
    code({ node, inline, className, children, ...props }) {
      const match = /language-(\w+)/.exec(className || '')
      return !inline && match ? (
        <SyntaxHighlighter
          style={materialOceanic}
          customStyle={{
            borderRadius: '15px',
            fontFamily: 'Fira Code',
            fontSize: '18px',
            padding: '15px',
          }}
          showLineNumbers
          wrapLongLines
          language={match[1]}
          PreTag="div"
          children={String(children).replace(/\n$/, '')}
          {...props}
        />
      ) : (
        <code className={className} {...props}>
          {children}
        </code>
      )
    },
  }
  return (
    <ExpandNoteStyled>
      <div className="container">
        <div className="note-title">
          <p>Here we go 🤘</p>
          <span>{noteName}</span>
        </div>
        <ReactMarkdown
          className="note-field noscrollbar"
          components={components}
          children={outputDetail}
        />
      </div>
    </ExpandNoteStyled>
  )
}

const ListBoxComponent = ({ theList }) => {
  const dispatch = useDispatch()

  const [updateModalIsOpen, setUpdateModalIsOpen] = useState(false)
  const [isExpandNoteModal, setIsExpandNoteModal] = useState(false)

  const [copiedUrl, setCopiedUrl] = useState(false)
  const [copiedUname, setCopiedUname] = useState(false)
  const [copiedDetail, setCopiedDetail] = useState(false)
  const listIcon = { account: '🤝', command: '👏', note: '✍' }
  const outputDetail =
    theList.type === 'account'
      ? decryptData(theList.details.theDetail)
      : theList.details.theDetail
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

  const deleteHandler = async () => {
    const resolveAfterDelete = () => {
      return new Promise((resolve) => {
        resolve(dispatch(deleteAList(theList._id)))
      })
    }
    await resolveAfterDelete()
    dispatch(listAllLists())
  }
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
          {theList.type !== 'note' ? (
            <CopyToClipboard
              text={outputDetail}
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
                value={!copiedDetail ? outputDetail : 'copied!'}
                readOnly
                className="list-detail flex-center bw-selection"
              ></input>
            </CopyToClipboard>
          ) : (
            <div
              className="detail-expand-btn flex-center click-fx noselect"
              onClick={() => setIsExpandNoteModal(true)}
            >
              Expand Note
            </div>
          )}
          {isExpandNoteModal && (
            <ModalComponent
              zIndexProps="1"
              setModalIsOpen={setIsExpandNoteModal}
              modalIsOpen={isExpandNoteModal}
              styleProps={{
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
              }}
            >
              <ExpandNoteComponent
                outputDetail={outputDetail}
                noteName={details.name}
              />
            </ModalComponent>
          )}
          <div className="modif-list flex-center">
            <div
              className="edit-list rounded-btn flex-center"
              onClick={() => setUpdateModalIsOpen(true)}
            >
              <EditSVG />
            </div>
            {updateModalIsOpen && (
              <ModalComponent
                setModalIsOpen={setUpdateModalIsOpen}
                modalIsOpen={updateModalIsOpen}
              >
                <UpdateListComponent
                  setUpdateModalIsOpen={setUpdateModalIsOpen}
                  list={theList}
                />
              </ModalComponent>
            )}
            <div
              className="delete-list rounded-btn flex-center"
              onClick={deleteHandler}
            >
              <DeleteSVG />
            </div>
          </div>
        </div>
      </div>
    </ListBoxStyled>
  )
}

export default ListBoxComponent
