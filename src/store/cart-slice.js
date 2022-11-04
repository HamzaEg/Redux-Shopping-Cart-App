import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState:{
        listItems: [],
        totalQuantity: 0,
        showCart: false
    },
    reducers: {
        addToCart(state, actions){
            const newItem = actions.payload;
            // check if item is already available
            const existingItem = state.listItems.find((item)=>item.id === newItem.id);

            if (existingItem) {
                existingItem.totalQuantity++;
                existingItem.totalPrice+= newItem.price;
            }else{
                state.listItems.push({
                    id: newItem.id,
                    price: newItem.price,
                    totalQuantity: 1,
                    totalPrice: newItem.price,
                    name: newItem.name

                })
                state.totalQuantity++;
            }

        },
        removeFromCart(){},
        setShowCart(state){
            state.showCart = !state.showCart;
        }
    }
});

export const cartActions = cartSlice.actions;
export default cartSlice;
