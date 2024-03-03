import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getBills } from '@/store/moudle/billSlice'
export const useBillList = () => {
  const dispatch = useDispatch()
  const { billList } = useSelector((state) => state.bill)
  useEffect(() => {
    dispatch(getBills())
  }, [dispatch])
  return { billList }
}
