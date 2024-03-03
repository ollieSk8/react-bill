import { createSlice } from '@reduxjs/toolkit'
import http from '@/utils/http'
export const billSlice = createSlice({
  name: 'bill',
  initialState: {
    billList: [],
  },
  reducers: {
    setBillList(state, action) {
      state.billList = action.payload
    },
  },
})

export const getBills = () => {
  return async (dispatch) => {
    let res = await http.get('/ka')
    dispatch(setBillList(res.data))
  }
}
export const { setBillList } = billSlice.actions
export default billSlice.reducer
