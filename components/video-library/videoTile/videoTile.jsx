import { useState } from 'react';
import styles from './videoTile.module.scss';
import { faWindowClose } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NodeNextRequest } from 'next/dist/server/base-http/node';

function Modal({ isOpen, setIsOpen }) {
  const handleClose = () => setIsOpen(false);
  return (
    <>
      {isOpen && (
        <div className={styles.takeover}>
          <div className={styles.overlay} onClick={handleClose}></div>
          <div className={styles.modal}>
            <button onClick={handleClose} className={styles.closeButton}>
              <FontAwesomeIcon icon={faWindowClose} size="2x" />
            </button>
            <iframe
              src="https://www.dropbox.com/s/jf536ve5p2umaik/Sept%2022%20-%20Sheila%20-%20Standing%20Body%20Flow%20-%20E09.mp4?raw=1"
              frameborder="0"
              style={{ width: '700px', height: '500px' }}
            ></iframe>
          </div>
        </div>
      )}
    </>
  );
}

export default function VideoTile({ image, url, title }) {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <Modal isOpen={showModal} setIsOpen={setShowModal} />
      <div
        className={styles.tile}
        style={{ backgroundImage: `url(${image.url})` }}
        onClick={() => setShowModal(true)}
      >
        <div className={styles.overlay}>
          <p className={styles.title}>{title}</p>
        </div>
      </div>
    </>
  );
}
