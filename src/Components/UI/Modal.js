import styles from './Modal.module.css'

// const portalElement = document.getElementById('modalRoot')

const Modal = props => {
  const CloseModal = event => {
    if (event.target.id === 'overlay' || event.target.id === 'closeModal') {
      props.close()
    }
  }

  const StayModal = () => {
    return
  }

  return (
    <div id='overlay' className={styles.modal} onClick={CloseModal}>
      <div id='container' className={styles.modalContainer}>
        <div id='header' className={styles.modalHeader}>
          <h2>Your Order</h2>
        </div>
        <div id='body' className={styles.modalBody}>
          {props.children}
        </div>
        <div id='footer' className={styles.modalFooter}>
          <button
            id='closeModal'
            className={styles.modalCloseBtn}
            onClick={props.close}
          >
            Close
          </button>
          <button id='stayModal' onClick={StayModal}>
            Order
          </button>
        </div>
      </div>
    </div>
  )
}

export default Modal
