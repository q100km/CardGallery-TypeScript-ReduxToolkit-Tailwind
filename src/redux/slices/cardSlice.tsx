import { createSlice } from '@reduxjs/toolkit'
import { IInitialState } from '../../Types/сardSliceTypes'
import { PayloadAction } from '@reduxjs/toolkit'
import { ICard } from '../../Types/сardsTypes'
import { RootState } from '../../Types/сardSliceTypes'
import { IComment } from '../../Types/modalsTypes'

const initialState: IInitialState = {
  cardsArray: [],
  commentsArray: [],
}

const cardSlice = createSlice({
  name: 'card',
  initialState: initialState,
  reducers: {
    addNewCard: (state: IInitialState, action: PayloadAction<ICard>) => {
      state.cardsArray.push(action.payload)
    },

    deleteCard: (state: IInitialState, action: PayloadAction<number>) => {
      state.cardsArray = state.cardsArray.filter((card) => card.id !== action.payload)
    },

    toggleFaforite: (state: IInitialState, action: PayloadAction<number>) => {
      const card = state.cardsArray.find((card) => card.id === action.payload)
      if (card) {
        card.favorite = !card.favorite
      }
    },

    toggleLike: (state: IInitialState, action: PayloadAction<number>) => {
      const card = state.cardsArray.find((card) => card.id === action.payload)
      if (card) {
        card.like = !card.like
      }
    },

    addNewComment: (state: IInitialState, action: PayloadAction<IComment>) => {
      state.commentsArray.push(action.payload)
    },
  },
})

export const selectCardsArray = (state: RootState) => state.card.cardsArray
export const selectCommentsArray = (state: RootState) => state.card.commentsArray

export const { addNewCard, deleteCard, addNewComment, toggleFaforite, toggleLike } = cardSlice.actions

export default cardSlice.reducer
