import React from 'react'
import { Link } from 'react-router-dom'
import { Modal, ModalBody } from 'reactstrap'

const SuccsessModal = ({ show, onCloseClick, handleSuccessClick }) => {
  return (
    <Modal
      id='success-Payment'
      tabIndex='-1'
      isOpen={show}
      toggle={onCloseClick}
      centered={true}
    >
      <ModalBody className='text-center p-5'>
        <div className='text-end'>
          <button
            type='button'
            onClick={handleSuccessClick}
            className='btn-close text-end'
            data-bs-dismiss='modal'
            aria-label='Close'
          ></button>
        </div>
        <div className='mt-2'>
          <lord-icon
            src='https://cdn.lordicon.com/tqywkdcz.json'
            trigger='hover'
            style={{ width: '150px', height: '150px' }}
          ></lord-icon>
          <h4 className='mb-3 mt-4'>Your Transaction is Successfull !</h4>
          <p className='text-muted fs-15 mb-4'>
            Successful transaction is the status of operation whose result is
            the payment of the amount paid by the customer in favor of the
            merchant.
          </p>
          <div className='hstack gap-2 justify-content-center'>
            <button className='btn btn-primary'>New transaction</button>
            <button className='btn btn-soft-success'>
              <i className='ri-links-line align-bottom'></i> Copy tracking link
            </button>
          </div>
        </div>
      </ModalBody>
    </Modal>
  )
}

export default SuccsessModal
