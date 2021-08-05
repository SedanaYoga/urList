import React, { useRef, useEffect } from 'react'
import ReactDOM from 'react-dom'
import { ModalStyled } from './ModalComponentStyled'
import { ReactComponent as DragIconSVG } from '../../images/drag-icon.svg'

const modalRoot = document.getElementById('modal')
let modalWrapper = undefined

const ModalComponent = ({ close, children, zIndexProps }) => {
  const modalRef = useRef()
  const moveRef = useRef()
  useEffect(() => {
    modalWrapper = window.getComputedStyle(modalRef.current)
  }, [modalRef])

  const dragModalHandler = (e) => {
    // const left = parseInt(modalWrapper.left)
    // const top = parseInt(modalWrapper.top)
    // modalRef.current.style.left = `${left + movementX}px`
    // modalRef.current.style.top = `${top + movementY}px`

    console.log(e)
  }
  const mouseDownModalHandler = (e) => {
    dragModalHandler(e)
  }

  return ReactDOM.createPortal(
    <ModalStyled zIndexProps={zIndexProps}>
      <div className="overlay" onClick={close}></div>
      <div ref={modalRef} className="modal-container">
        <div className="modal-children">
          {children}
          <div
            className="drag"
            ref={moveRef}
            onMouseDown={mouseDownModalHandler}
            onDrag={dragModalHandler}
          >
            <DragIconSVG />
          </div>
        </div>
      </div>
    </ModalStyled>,
    modalRoot
  )
}

export default ModalComponent
