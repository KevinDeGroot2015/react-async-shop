import { createSlice } from "@reduxjs/toolkit";

export const mainCartState = {
    showCart: false,
    cartItems: [],
};

const cartSlice = createSlice({
    name: "cartState",
    initialState: mainCartState,
    reducers: {
        togglecart(state) {
            state.showCart = !state.showCart;
        },
        addProductToCart(state, action) {
            const newItem = action.payload;
            const existingItem = state.cartItems.find(
                (item) => item.id === newItem.id
            );
            if (!existingItem) {
                state.cartItems.push({
                    id: newItem.id,
                    title: newItem.title,
                    description: newItem.description,
                    quantity: 1,
                    price: newItem.price,
                    totalprice: newItem.price,
                });
            } else {
                existingItem.quantity++,
                    (existingItem.totalprice =
                        existingItem.totalprice + newItem.price);
            }
        },
        removeItemFromCart(state, action) {
            const id = action.payload;
            state.cartItems = state.cartItems.filter((item) => item.id !== id);
        },
        decrementItemInCart(state, action) {
            const id = action.payload;
            state.cartItems.find((item) => {
                if (item.id === id) {
                    if (item.quantity <= 1) {
                        state.cartItems = state.cartItems.filter(
                            (item) => item.id !== id
                        );
                    } else {
                        item.quantity--;
                        item.totalprice = item.totalprice - item.price;
                    }
                }
            });
        },
        incrementItemInCart(state, action) {
            const id = action.payload;
            state.cartItems.find((item) => {
                if (item.id === id) {
                    item.quantity++;
                    item.totalprice = item.totalprice + item.price;
                }
            });
        },
    },
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
