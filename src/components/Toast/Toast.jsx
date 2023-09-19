import React from 'react';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Toast = () => {
    const handleToast = () => {
        toast.info('Success Notification !', {
            position: toast.POSITION.TOP_RIGHT
        });
    }
  return (
    <div>
        <p>Toast Message</p>
        <button onClick={handleToast}>Add</button>
        <ToastContainer />
    </div>
  )
}

export default Toast;