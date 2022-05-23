import React, { useState, useContext, useReducer, useEffect } from 'react'
import cartItems from './data'
import reducer from './reducer'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-useReducer-cart-project'
const AppContext = React.createContext()

const initialState = {
  loading : false,
  cart : [],
  total : 0,
  amount : 0
}

const AppProvider = ({ children }) => {
  const [state,dispatch] = useReducer(reducer,initialState);
  const clearCart = () => {
    dispatch({type:'CLEAR_CART'});
  }

  useEffect(() => {
    dispatch({type : 'GET_TOTALS'})
  },[state.cart])

  const remove = (id) => {
    dispatch({type:'REMOVE', payload : id})
  }

  const fetchData = async () => {
    dispatch({type:'LOADING'});
    const response = await fetch(url);
    const res = await response.json();
    dispatch({type: 'DISPLAY_ITEMS', payload: res});
  }

  const toggleAmount = (id,type) => {
    dispatch({type : 'TOGGLE_AMOUNT', payload: {id,type}});
  }

  useEffect(() => {
    fetchData();
  },[])

  return (
    <AppContext.Provider
      value={{
        ...state,
        clearCart,
        remove,
        toggleAmount
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
