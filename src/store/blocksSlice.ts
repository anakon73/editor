import type { PayloadAction } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'
import type { Block } from '../types'

function loadBlocksFromLocalStorage(): Block[] {
  const savedBlocks = localStorage.getItem('blocks')
  return savedBlocks ? JSON.parse(savedBlocks) : []
}

interface BlocksState {
  blocks: Block[]
}

const initialState: BlocksState = {
  blocks: loadBlocksFromLocalStorage(),
}

const blocksSlice = createSlice({
  name: 'blocks',
  initialState,
  reducers: {
    updateBlockContent(state, action: PayloadAction<{ index: number, content: string }>) {
      state.blocks[action.payload.index].content = action.payload.content
    },
    addBlock(state, action: PayloadAction<Block>) {
      state.blocks.push(action.payload)
    },
    moveBlockUp(state: BlocksState, action: PayloadAction<number>) {
      const index = action.payload
      if (index > 0) {
        [state.blocks[index - 1], state.blocks[index]] = [state.blocks[index], state.blocks[index - 1]]
      }
    },

    moveBlockDown(state: BlocksState, action: PayloadAction<number>) {
      const index = action.payload
      if (index < state.blocks.length - 1) {
        [state.blocks[index + 1], state.blocks[index]] = [state.blocks[index], state.blocks[index + 1]]
      }
    },
    cloneBlock(state, action: PayloadAction<number>) {
      const block = state.blocks[action.payload]
      state.blocks.splice(action.payload + 1, 0, { ...block })
    },
    removeBlock(state, action: PayloadAction<number>) {
      state.blocks.splice(action.payload, 1)
    },
  },
})

export const {
  updateBlockContent,
  addBlock,
  moveBlockUp,
  moveBlockDown,
  cloneBlock,
  removeBlock,
} = blocksSlice.actions

export default blocksSlice.reducer
