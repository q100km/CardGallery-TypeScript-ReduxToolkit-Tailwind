import { createSlice } from '@reduxjs/toolkit'
import { IFilterInitialState } from '../../Types/filterSliceTypes'
import { PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../../Types/сardSliceTypes'

const initialState: IFilterInitialState = {
  filterTitleValue: '',
  filterDiscriptionValue: '',
  onlyFavorite: false,
}

const filterSlice = createSlice({
  name: 'filter',
  initialState: initialState,
  reducers: {
    setFilterTitleValue: (state: IFilterInitialState, action: PayloadAction<string>) => {
      state.filterTitleValue = action.payload
    },

    setFilterDiscriptionValue: (state: IFilterInitialState, action: PayloadAction<string>) => {
      state.filterDiscriptionValue = action.payload
    },

    setOnlyFavorite: (state: IFilterInitialState, action: PayloadAction<boolean>) => {
      state.onlyFavorite = action.payload
    },

    cancelFilters: () => {
      return initialState
    },
  },
})

export const selectFilterInputValue = (state: RootState) => state.filter.filterTitleValue
export const selectFilterDiscriptionValue = (state: RootState) => state.filter.filterDiscriptionValue
export const selectOnlyFavorite = (state: RootState) => state.filter.onlyFavorite

export const { setFilterTitleValue, setFilterDiscriptionValue, setOnlyFavorite, cancelFilters } = filterSlice.actions

export default filterSlice.reducer
