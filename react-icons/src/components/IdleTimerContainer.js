import React, {useState} from 'react'
import { useIdleTimer } from 'react-idle-timer' 
import Modal from 'react-modal';

Modal.setAppElement('#root');

const IdleTimerContainer = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(true);
    const [isModalOpen,setIsModalOpen] = useState(false);
  const  logOut = () => {
    setIsModalOpen(false);
    setIsLoggedIn(false);
  }

  const onIdle = () => {
    console.log("idle");
    setIsModalOpen(true);
  } 

  const stayActive = () => {
      setIsModalOpen(false);
      setIsLoggedIn(true);
  }

  const {
    start,
    reset,
    pause,
    resume,
    isIdle
  } = useIdleTimer({
    onIdle,
    timeout: 2000
  })
  return (
    <div>
        {isLoggedIn ? <h2>Hello User</h2> : <h2>Hello Guest</h2>}
        <Modal isOpen={isModalOpen}>
            <h2>You have been idle for a while</h2>
            <p>You will be logged out soon</p>
            <div>
                <button onClick={logOut}>Log me out</button>
                <button onClick={stayActive}>Keep me signed in</button>
            </div>
        </Modal>
    </div>
  )
}

export default IdleTimerContainer;