import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../../Types/сardSliceTypes'

const initialState: string = ''

const errorSlice = createSlice({
  name: 'error',
  initialState: initialState,
  reducers: {
    setError: (state, action: PayloadAction<string>) => {
      return action.payload
    },

    clearError: () => {
      return initialState
    },
  },
})

export const selectError = (state: RootState) => state.error

export const { setError, clearError } = errorSlice.actions

export default errorSlice.reducer
