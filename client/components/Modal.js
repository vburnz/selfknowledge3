import React from 'react'

const Modal = ({ handleClose, show, children}) => {
    const showHideClassName = show ? 'modal display-block' : 'modal display-none';
  
    return (
      <div className={showHideClassName}>
        <section className='modal-main'>
          {children}
          <div className="center">
          <button type="button" style={{width: '70px', display:'flex', justifyContent:'center'}}
            onClick={handleClose}
          >
            Close
          </button>
          </div>
        </section>
      </div>
    );
};

export default Modal; 