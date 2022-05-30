import React from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

const CustomToast = ({closeToast}) => {
    return(
        <div>
            Something went wrong! <button onClick={closeToast}>close</button>
        </div>
    )
}

//toast.configure()
const Toast = () => {
    const notify = () => {
        toast(<CustomToast/>, {
            position: "bottom-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
        toast.success('🦄 Wow so easy!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
    }
    return (
        <div className='toast'>
            <ToastContainer/>
            <button onClick={notify}>Notify!</button>
        </div>
    )
}

export default Toast;