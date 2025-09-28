import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  initialState: [],
  name: "cartSlice",
  reducers: {
    addToCart: (state, action) => {
  const findproduct = state.find(
    (product) => product.id === action.payload.id
  );
  if (findproduct) {
    findproduct.quantity += action.payload.quantity; // ⬅️ هنا استخدم الكمية من المستخدم
  } else {
    const productclon = { ...action.payload }; // quantity موجود في payload
    state.push(productclon);
  }
},
    deleteFromCart: (state, action) => {
      return state.filter((Product) => Product.id !== action.payload.id);
    },
    updateCartQuantity: (state, action) => {
      const product = state.find((p) => p.id === action.payload.id);
      if (product) {
        product.quantity = action.payload.quantity;
      }
    },
  },
});

export const { addToCart, deleteFromCart,updateCartQuantity } = cartSlice.actions;
export default cartSlice.reducer;
