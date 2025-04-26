import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import  { ProductType } from "../../db/products";

interface HomeState  {
  products: ProductType[],
    query : string,
    itemClicked : string
}

interface getProductPayload {
  data: ProductType[],
  query: string,
  itemClicked: string
}

const initialState: HomeState = {
  query: '',
  itemClicked: '',
  products : []
}


const HomeSlice = createSlice({
  name: 'HomeSlice',
  initialState,
  reducers: {
    getRadioValue: (state, action:PayloadAction<string>) => {
      const RadioValue = action.payload
      state.itemClicked = RadioValue
      
    },
    getSearchValue: (state, action:PayloadAction<string>)=>{
      const SearchValue = action.payload
      state.query = SearchValue
      
    },
    getFiltredProducts: (state, action:PayloadAction<getProductPayload>) => {

      const { data, query, itemClicked } = action.payload
   
      
      let filteredProducts = data;

      // Apply the search query filter if it exists
      if (query) {
        filteredProducts = filteredProducts.filter(
          (product) =>
            product.title.toLowerCase().includes(query.toLowerCase()) ||
            product.company.toLowerCase().includes(query.toLowerCase())
        );
      }

      // Apply the item clicked filter if it exists
      // This filter is applied to the list that might have already been filtered by the query
      if (itemClicked) {
         filteredProducts = filteredProducts.filter(
          (product) =>
            product.category.toLowerCase().includes(itemClicked.toLowerCase()) ||
            product.newPrice.toLowerCase().includes(itemClicked.toLowerCase()) ||
            product.color.toLowerCase().includes(itemClicked.toLowerCase())
       );
      }

      // Update the state with the final filtered list
      state.products = filteredProducts;
     

      
      


    }
  }
})

export const { getRadioValue, getSearchValue, getFiltredProducts} = HomeSlice.actions

export default HomeSlice.reducer

