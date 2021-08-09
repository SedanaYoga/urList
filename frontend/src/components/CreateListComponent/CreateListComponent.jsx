import React, { useState } from 'react'
import {
  AddUrlStyled,
  CreateListStyled,
  NoteEditStyled,
} from './CreateListComponentStyled'
import { useDispatch, useSelector } from 'react-redux'
import { capitalize } from '../../helper/usefullFunc'
import { ReactComponent as PassShowSVG } from '../../images/pass-show.svg'
import { ReactComponent as PassHideSVG } from '../../images/pass-hidden.svg'
import ButtonComponent from '../ButtonComponent/ButtonComponent'
import ModalComponent from '../ModalComponent/ModalComponent'
import { createAList, listAllLists } from '../../actions/listActions'
import ReactMarkdown from 'react-markdown'
import gfm from 'remark-gfm'

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

const EditNoteComponent = () => {
  const [viewSelect, setViewSelect] = useState('original')
  const viewOptions = ['original', 'markdown']
  return (
    <NoteEditStyled viewSelect={viewSelect}>
      <div className="container">
        <div className="edit-note-title">
          <p>Edit with markdown 🙄</p>
        </div>
        <div className="edit-field-container">
          <div className="select-view">
            {viewOptions.map((option, i) => (
              <div
                key={i}
                className={`flex-center ${
                  option === viewSelect ? `active` : null
                }`}
                onClick={(e) => {
                  setViewSelect(option)
                }}
              >
                {capitalize(option)}
              </div>
            ))}
          </div>
          <textarea
            className="edit-field noscrollbar"
            placeholder="input your markdown here..."
            cols="30"
            rows="20"
          ></textarea>
        </div>

        <div className="submit-btn flex-right">
          <ButtonComponent>Submit</ButtonComponent>
        </div>
      </div>
    </NoteEditStyled>
  )
}

const CreateListComponent = ({ setCreateModalIsOpen }) => {
  const dispatch = useDispatch()
  const [selectedType, setSelectedType] = useState('account')
  const [isPassVisible, setIsPassVisible] = useState(false)
  const [isShowModalUrl, setIsShowModalUrl] = useState(false)
  const [isShowModalNote, setIsShowModalNote] = useState(false)

  const [listName, setListName] = useState('')
  const [listUrl, setListUrl] = useState('')
  const [listUsername, setListUsername] = useState('')
  const [listTheDetail, setListTheDetail] = useState('')

  const listTypes = useSelector((state) => state.listAll.listTypes)
  const selectTypeHandler = (e) => {
    setSelectedType(e.target.innerText.toLowerCase())
    setListName('')
    setListUrl('')
    setListUsername('')
    setListTheDetail('')
  }

  const createAListHandler = async () => {
    const resolveAfterCreateList = () => {
      return new Promise((resolve) => {
        resolve(
          dispatch(
            createAList({
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
    await resolveAfterCreateList()
    dispatch(listAllLists())
    setCreateModalIsOpen(false)
  }
  return (
    <CreateListStyled>
      <div className="header">
        <div className="title noselect">Let's create it!</div>
        <div className="switch-type">
          {listTypes.map((type, i) => (
            <div
              key={i}
              className={`type flex-center noselect ${
                selectedType === type ? 'selected' : null
              }`}
              onClick={selectTypeHandler}
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
              <div
                className="sm-button noselect"
                onClick={() => setIsShowModalNote(true)}
              >
                📝editView
              </div>
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
        {isShowModalNote && (
          <ModalComponent
            modalIsOpen={isShowModalNote}
            setModalIsOpen={setIsShowModalNote}
            zIndexProps="1"
            styleProps={{
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
            }}
          >
            <EditNoteComponent />
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
        <ButtonComponent clickFunc={createAListHandler}>
          Create Now
        </ButtonComponent>
      </div>
    </CreateListStyled>
  )
}

export default CreateListComponent
