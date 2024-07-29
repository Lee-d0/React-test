import "./Modal.css"

function Modal({title, clickedCancel,clickedConfirm }){
  return (
    <div>
        <div className="modal">
          <p className="modal__title">{title}</p>
          <div className="modal__buttons">
            <button className="btn btn__cancel" onClick={clickedCancel}>Cancel</button>
            <button className="btn" onClick={clickedConfirm}>Confirm</button>
          </div>
        </div>
        <div className="backdrop" />
      </div>
  )
}

export default Modal