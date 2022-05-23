import React, { useState, useContext } from 'react'

const AppContext = React.createContext();

const AppProvider = ({children}) => {
    const [isSidebarOpen,setIsSidebarOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    }

    const closeModal = () => {
        setIsModalOpen(false);
    }

    const openSidebar = () => {
        setIsSidebarOpen(true);   
    }

    const closeSidebar = () => {
        setIsSidebarOpen(false);
    }

    return (<AppContext.Provider value={{setIsSidebarOpen,isModalOpen,isSidebarOpen,openModal,closeModal,openSidebar,closeSidebar}}>{children}</AppContext.Provider>)
}

const useGlobalContext = () => {
    return useContext(AppContext);
}

export {AppContext,AppProvider,useGlobalContext};