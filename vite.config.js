import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        explore: 'src/Pages/Explore.jsx',
        productDetails: 'src/Pages/ProductDetails.jsx',
        cartItems: 'src/Pages/CartItems.jsx',
      },
    },
  },
})
