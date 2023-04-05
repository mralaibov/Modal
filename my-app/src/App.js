import React, { useState } from 'react';
import Modal from './Modal'
import './App.css';
function App() {
    const [isOpen, setIsOpen] = useState(false)
  return (
    <>
      <div className="wrapper-button">
          <button onClick={() => setIsOpen(true)}>Open Modal</button>
          <Modal open={isOpen} onClose={() => setIsOpen(false)}>
              Opened Modal
          </Modal>
      </div>

       <div className="other-content">
           <button>Other Button</button>
       </div>
    </>
  );
}

export default App;
