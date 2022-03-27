import React, { useState } from 'react'
import { AddUrlStyled, CreateListStyled } from './UpdateListComponentStyled'
import { useDispatch, useSelector } from 'react-redux'
import { capitalize } from '../../helper/usefullFunc'
import { ReactComponent as PassShowSVG } from '../../images/pass-show.svg'
import { ReactComponent as PassHideSVG } from '../../images/pass-hidden.svg'
import ButtonComponent from '../ButtonComponent/ButtonComponent'
import ModalComponent from '../ModalComponent/ModalComponent'
import { updateAList, listAllLists } from '../../actions/listActions'
import { decryptData } from '../../helper/secure'

const AddUrlComponent = ({ listUrl, setListUrl }) => {
  return (
    <AddUrlStyled>
      <p>Add your URL here</p>
      <input
        className="adurl-input"
        type="text"
        value={listUrl}
        onChange={(e) => setListUrl(e.target.value)}
      />
    </AddUrlStyled>
  )
}

const UpdateListComponent = ({ setUpdateModalIsOpen, list }) => {
  const dispatch = useDispatch()
  const [isPassVisible, setIsPassVisible] = useState(false)
  const [isShowModalUrl, setIsShowModalUrl] = useState(false)

  const listTypes = useSelector((state) => state.listAll.listTypes)
  const { _id, type: selectedType, details } = list
  const { name, url, userName, theDetail } = details
  const outputDetail =
    selectedType === 'account' ? decryptData(theDetail) : theDetail

  const [listName, setListName] = useState(name)
  const [listUrl, setListUrl] = useState(url)
  const [listUsername, setListUsername] = useState(userName)
  const [listTheDetail, setListTheDetail] = useState(outputDetail)

  const updateAListHandler = async () => {
    const resolveAfterUpdateList = () => {
      return new Promise((resolve) => {
        resolve(
          dispatch(
            updateAList({
              _id: _id,
              type: selectedType,
              details: {
                name: listName,
                url: listUrl,
                userName: listUsername,
                theDetail: listTheDetail,
              },
            })
          )
        )
      })
    }
    await resolveAfterUpdateList()
    dispatch(listAllLists())
    setUpdateModalIsOpen(false)
  }

  return (
    <CreateListStyled>
      <div className="header">
        <div className="title noselect">Go update it!</div>
        <div className="switch-type">
          {listTypes.map((type, i) => (
            <div
              key={i}
              className={`type flex-center noselect ${
                selectedType === type ? 'selected' : null
              }`}
            >
              {capitalize(type)}
            </div>
          ))}
        </div>
      </div>
      <div className="body">
        <div className="list-name noselect">List Name</div>
        <input
          className="input-name"
          value={listName}
          onChange={(e) => setListName(e.target.value)}
          type="text"
          placeholder="Input name..."
        />
        <div className="list-detail-title noselect">
          <p>List Detail</p>
          {selectedType === 'account' ? (
            <div
              className="sm-button noselect"
              onClick={() => setIsShowModalUrl(!isShowModalUrl)}
            >
              📍addUrl
            </div>
          ) : (
            selectedType === 'note' && (
              <div className="sm-button noselect">📝editView</div>
            )
          )}
        </div>
        {isShowModalUrl && (
          <ModalComponent
            modalIsOpen={isShowModalUrl}
            setModalIsOpen={setIsShowModalUrl}
            zIndexProps="1"
          >
            <AddUrlComponent listUrl={listUrl} setListUrl={setListUrl} />
          </ModalComponent>
        )}
        <div className="thedetail-container">
          {selectedType === 'account' ? (
            <div className="all-types-detail ">
              <p className="noselect">Username</p>
              <input
                type="text"
                value={listUsername}
                onChange={(e) => setListUsername(e.target.value)}
              />
              <p className="noselect">Password</p>
              <div className="pass-container">
                <input
                  value={listTheDetail}
                  className="account-input"
                  onChange={(e) => setListTheDetail(e.target.value)}
                  type={isPassVisible ? `text` : `password`}
                ></input>
                <div
                  className="pass-svg flex-center"
                  onClick={() => setIsPassVisible(!isPassVisible)}
                >
                  {!isPassVisible ? <PassHideSVG /> : <PassShowSVG />}
                </div>
              </div>
            </div>
          ) : selectedType === 'command' ? (
            <div className="all-types-detail">
              <p>Command Line</p>
              <input
                className="command-input"
                value={listTheDetail}
                onChange={(e) => setListTheDetail(e.target.value)}
                type="text"
              />
            </div>
          ) : (
            <div className="all-types-detail">
              <textarea
                className="noscrollbar"
                name="note"
                value={listTheDetail}
                onChange={(e) => setListTheDetail(e.target.value)}
                id="note-textarea"
                cols="30"
                rows="10"
              ></textarea>
            </div>
          )}
        </div>
      </div>
      <div className="create-now-btn flex-center">
        <ButtonComponent clickFunc={updateAListHandler}>
          Update Now
        </ButtonComponent>
      </div>
    </CreateListStyled>
  )
}

export default UpdateListComponent
