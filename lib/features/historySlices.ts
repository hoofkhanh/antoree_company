import { Product } from "@/types/product";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type FavoriteState = {
  historyProducts: Product[];
}

const initialState: FavoriteState = {
  historyProducts: []
};

const historySlice = createSlice({
  name: "history",
  initialState,
  reducers: {
    toggleHistory: (state, action: PayloadAction<Product>) => {
      const product = action.payload;
      const index = state.historyProducts.findIndex(p => p.id === product.id);

      if (index !== -1) {
        state.historyProducts.splice(index, 1);
      }
      state.historyProducts.unshift(product);
    },

    setHishories: (state, action: PayloadAction<Product[]>) => {
      state.historyProducts = action.payload;
    }
  }
});

export const { setHishories, toggleHistory } = historySlice.actions;

export default historySlice.reducer;
