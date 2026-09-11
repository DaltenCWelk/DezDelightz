import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [
    {
      id: 1,
      name: "Ceramic Mug",
      category: "ceramics",
      price: 25,
      image: "/images/ceramic-mug.jpg",
      description: "Handmade ceramic mug",
    },
    {
      id: 2,
      name: "Monstera Plant",
      category: "plants",
      price: 20,
      image: "/images/monstera.jpg",
      description: "Rooted Monstera plant",
    },
    {
      id: 3,
      name: "Original Art",
      category: "art",
      price: 145,
      image: "/public/art.png",
      description: "Original Art",
    },
    {
      id: 4,
      name: "Software Development",
      category: "art",
      price: 0,
      image: "/public/SoftDev.png",
      description: "Software Development",
    },
  ],
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
});

export default productsSlice.reducer;
