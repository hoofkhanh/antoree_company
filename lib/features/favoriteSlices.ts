import { Product } from "@/types/product";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type FavoriteState = {
  favoriteProducts: Product[];
}

const initialState: FavoriteState = {
  favoriteProducts: []
};

const favoriteSlice = createSlice({
  name: "favorite",
  initialState,
  reducers: {
    toggleFavorite: (state, action: PayloadAction<Product>) => {
      const product = action.payload;
      const index = state.favoriteProducts.findIndex(p => p.id === product.id);

      if (index !== -1) {
        state.favoriteProducts.splice(index, 1);
      } else {
        state.favoriteProducts.unshift(product);
      }
    },

    setFavorites: (state, action: PayloadAction<Product[]>) => {
      state.favoriteProducts = action.payload;
    }
  }
});

export const { toggleFavorite, setFavorites } = favoriteSlice.actions;

export default favoriteSlice.reducer;
