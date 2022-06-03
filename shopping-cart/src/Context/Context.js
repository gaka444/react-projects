import {createContext, useContext, useReducer} from 'react';
import {faker} from '@faker-js/faker';
import { cartReducer, filterReducer } from '../Reducer';

const Cart = createContext();

const Context = ({children}) => {
    const products = [...Array(20)].map(() => ({
        id: faker.datatype.uuid(),
        name: faker.commerce.productName(),
        price: faker.commerce.price(),
        image: faker.image.animals(1234,2345,true),
        inStock: parseInt(faker.random.numeric()),
        fastDelivery: faker.datatype.boolean(),
        ratings: faker.random.numeric(),
      }));

    const [state, dispatch] = useReducer(cartReducer,{
        products,
        cart: []
    })

    const [productState, productDispatch] = useReducer(filterReducer,{
        byStock : false,
        byFastDelivery: false,
        byRating: 0,
        searchQuery: ''
    })

    return (<Cart.Provider value={{state,dispatch, productState, productDispatch}}>{children}</Cart.Provider>);
}

export const CartState = () => {
    return useContext(Cart);
}

export default Context;