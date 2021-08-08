import React, { useState, useCallback, useEffect } from 'react'
import ReactDOM from 'react-dom'
import { ModalStyled } from './ModalComponentStyled'

const modalRoot = document.getElementById('modal')

const ModalComponent = ({
  children,
  zIndexProps,
  modalIsOpen,
  setModalIsOpen,
}) => {
  const [diffX, setDiffX] = useState(0)
  const [diffY, setDiffY] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const [styles, setStyles] = useState({})
  const dragStart = (e) => {
    setDiffX(e.screenX - e.currentTarget.getBoundingClientRect().left)
    setDiffY(e.screenY - e.currentTarget.getBoundingClientRect().top)
    setIsDragging(true)
  }
  const dragging = (e) => {
    if (isDragging) {
      var left = e.screenX - diffX
      var top = e.screenY - diffY
      setStyles({
        left: left,
        top: top,
      })
    }
  }
  const dragEnd = (e) => {
    setIsDragging(false)
  }

  const keyPress = useCallback(
    (e) => {
      if (e.key === 'Escape' && modalIsOpen) {
        setModalIsOpen(false)
      }
    },
    [setModalIsOpen, modalIsOpen]
  )

  useEffect(() => {
    document.addEventListener('keydown', keyPress)
    return () => document.removeEventListener('keydown', keyPress)
  }, [keyPress])

  return ReactDOM.createPortal(
    <ModalStyled
      zIndexProps={zIndexProps}
      diffX={diffX}
      isDragging={isDragging}
    >
      <div className="overlay" onClick={() => setModalIsOpen(false)}></div>
      <div
        className="modal-container"
        onMouseDown={dragStart}
        onMouseMove={dragging}
        onMouseUp={dragEnd}
        style={styles}
      >
        <div className="modal-children">{children}</div>
      </div>
    </ModalStyled>,
    modalRoot
  )
}

export default ModalComponent
