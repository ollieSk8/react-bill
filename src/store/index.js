import { configureStore } from '@reduxjs/toolkit'
import billReducer from './moudle/billSlice'
const store = configureStore({
  reducer: {
    bill: billReducer,
  },
})
export default store
