import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import type { AppDispatch, RootState } from '../store'
import {
  cloneBlock,
  moveBlockDown,
  moveBlockUp,
  removeBlock,
  updateBlockContent,
} from '../store/blocksSlice'

const Workspace: React.FC = () => {
  const blocks = useSelector((state: RootState) => state.blocks)
  const dispatch: AppDispatch = useDispatch()

  const handleContentChange = (index: number, content: string) => {
    dispatch(updateBlockContent({ index, content }))
  }

  return (
    <div className="bg-violet-50 px-8 pt-6">
      {blocks.map((block, index) => (
        <div key={index} className="rounded bg-white p-4 shadow-md">
          <div className="flex justify-between">
            <div>{block.type}</div>
            <div className="space-x-2">
              <button onClick={() => dispatch(moveBlockUp(index))}>⬆️</button>
              <button onClick={() => dispatch(moveBlockDown(index))}>⬇️</button>
              <button onClick={() => dispatch(cloneBlock(index))}>🔁</button>
              <button onClick={() => dispatch(removeBlock(index))}>❌</button>
            </div>
          </div>
          {/* Editable Content */}
          <input
            type="text"
            className="mt-2 w-full rounded border p-2"
            placeholder={`Enter ${block.type} content`}
            value={block.content}
            onChange={e => handleContentChange(index, e.target.value)}
          />
        </div>
      ))}
    </div>
  )
}

export default Workspace
