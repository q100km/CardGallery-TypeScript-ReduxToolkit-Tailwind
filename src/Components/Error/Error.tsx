import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { ToastContainer, toast } from 'react-toastify'
import { selectError, clearError } from '../../redux/slices/errorSlice'

const Error = () => {
  const errorMessage = useSelector(selectError)
  const dispatch = useDispatch()

  useEffect(() => {
    if (errorMessage) {
      toast.error(errorMessage)
      dispatch(clearError())
    }
  }, [errorMessage, dispatch])

  //
  return <ToastContainer position='top-center' autoClose={2000} />
}

export default Error
