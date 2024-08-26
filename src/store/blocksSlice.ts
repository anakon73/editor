import { type PayloadAction, createSlice } from '@reduxjs/toolkit'
import type { Block } from '../types'

interface UpdateContentPayload {
  index: number
  content: string
}

const initialState: Block[] = []

export const blocksSlice = createSlice({
  name: 'blocks',
  initialState,
  reducers: {
    addBlock: (state, action: PayloadAction<Block>) => {
      state.push(action.payload)
    },
    removeBlock: (state, action: PayloadAction<number>) => {
      return state.filter((_, index) => index !== action.payload)
    },
    moveBlockUp: (state, action: PayloadAction<number>) => {
      const index = action.payload
      if (index > 0) {
        const temp = state[index - 1]
        state[index - 1] = state[index]
        state[index] = temp
      }
    },
    moveBlockDown: (state, action: PayloadAction<number>) => {
      const index = action.payload
      if (index < state.length - 1) {
        const temp = state[index + 1]
        state[index + 1] = state[index]
        state[index] = temp
      }
    },
    cloneBlock: (state, action: PayloadAction<number>) => {
      state.splice(action.payload + 1, 0, { ...state[action.payload] })
    },
    updateBlockContent: (state, action: PayloadAction<UpdateContentPayload>) => {
      const { index, content } = action.payload
      if (state[index]) {
        state[index].content = content
      }
    },
  },
})

export const {
  addBlock,
  removeBlock,
  moveBlockUp,
  moveBlockDown,
  cloneBlock,
  updateBlockContent,
} = blocksSlice.actions

export default blocksSlice.reducer
