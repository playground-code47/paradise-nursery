import { configureStore, createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action) {
      const selectedPlant = action.payload;
      if (!selectedPlant?.id) return;

      const existingPlant = state.items.find((item) => item.id === selectedPlant.id);
      if (existingPlant) {
        existingPlant.quantity += 1;
      } else {
        state.items.push({ ...selectedPlant, quantity: 1 });
      }
    },
    removeItem(state, action) {
      const id = typeof action.payload === 'object' ? action.payload.id : action.payload;
      state.items = state.items.filter((item) => item.id !== id);
    },
    updateQuantity(state, action) {
      const { id, quantity } = action.payload ?? {};
      if (!Number.isInteger(quantity) || quantity < 1) return;

      const plant = state.items.find((item) => item.id === id);
      if (plant) plant.quantity = quantity;
    },
  },
});

export const { addItem, removeItem, updateQuantity } = cartSlice.actions;
export const selectCartItems = (state) => state.cart.items;
export const selectTotalQuantity = (state) =>
  state.cart.items.reduce((total, item) => total + item.quantity, 0);
export const selectCartTotal = (state) =>
  state.cart.items.reduce((total, item) => total + item.price * item.quantity, 0);

export const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
  },
});

export default cartSlice.reducer;
