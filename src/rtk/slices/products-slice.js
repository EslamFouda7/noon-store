import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
const baseUrl = "https://dummyjson.com/products";

//get all products
export const fetchProducts = createAsyncThunk(
  "ProductsSlice/products",
   async ({ limit, skip }) => {
    const res = await fetch(`${baseUrl}?limit=${limit}&skip=${skip}`);
    const data = await res.json();
    return data; // بيرجع { products, total, skip, limit }
  }
);

//get products by category
export const fetchProductsByCategory = createAsyncThunk(
  "ProductsSlice/fetchProductsByCategory",
  async (category) => {
    const res = await fetch(`${baseUrl}/category/${category}`);
    const data = await res.json();
    return { products: data.products, category };
  }
);

// get products by search
export const productsSearch = createAsyncThunk(
  "ProductsSlice/productsSearch",
  async (query) => {
    const res = await fetch(`${baseUrl}/search?q=${query}`);
    const data = await res.json();
    return data.products;
  }
);

// get product by Id
export const productById = createAsyncThunk(
  "ProductsSlice/productDitals",
  async (id) => {
    const res = await fetch(`${baseUrl}/${id}`);
    const data = await res.json();
    return data;
  }
);

const ProductsSlice = createSlice({
  name: "ProductsSlice",
  initialState: {
    items: [],
    loading: false,
    category: null,
    product: null,
    total: 0,
    limit: 10,
    skip: 0,
  },
  reducers: {
    clearSearch: (state) => {
      state.isSearching = false;
      state.items = []; // أو رجعها للـ default لو عاوز
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload.products;
        state.total = action.payload.total;
        state.limit = action.payload.limit;
        state.skip = action.payload.skip;
        state.isSearching = false;
      })
      .addCase(fetchProductsByCategory.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchProductsByCategory.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload.products;
        state.category = action.payload.category;
      })
      .addCase(productsSearch.pending, (state) => {
        state.loading = true;
      })
      .addCase(productsSearch.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
        state.isSearching = true;
      })
      .addCase(productById.pending, (state) => {
        state.loading = true;
        state.product = null;
      })
      .addCase(productById.fulfilled, (state, action) => {
        state.loading = false;
        state.product = action.payload;
      });
  },
});
export const { clearSearch } = ProductsSlice.actions;
export default ProductsSlice.reducer;
