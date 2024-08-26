import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useClickAway } from 'react-use'
import Headline from '../assets/icons/Headline.svg'
import Image from '../assets/icons/Image.svg'
import Paragraph from '../assets/icons/Paragraph.svg'
import ArrowDown from '../assets/icons/ArrowDown.svg'
import ArrowTop from '../assets/icons/ArrowTop.svg'
import Trash from '../assets/icons/Trash.svg'
import Copy from '../assets/icons/Copy.svg'
import type { AppDispatch, RootState } from '../store'
import {
  cloneBlock,
  moveBlockDown,
  moveBlockUp,
  removeBlock,
  updateBlockContent,
} from '../store/blocksSlice'
import type { Block } from '../types'

const Workspace: React.FC = () => {
  const blocks = useSelector((state: RootState) => state.blocks.blocks)
  const dispatch: AppDispatch = useDispatch()

  const [selectedBlockIndex, setSelectedBlockIndex] = useState<number | null>(null)

  const blocksRef = useRef(null)
  useClickAway(blocksRef, () => setSelectedBlockIndex(null))

  const handleContentChange = (content: string) => {
    if (selectedBlockIndex !== null) {
      dispatch(updateBlockContent({ index: selectedBlockIndex, content }))
    }
  }

  useEffect(() => {
    localStorage.setItem('blocks', JSON.stringify(blocks))
  }, [blocks])

  const handleMoveBlock = (direction: 'up' | 'down') => {
    if (selectedBlockIndex !== null) {
      const index = selectedBlockIndex
      if (direction === 'up' && index > 0) {
        dispatch(moveBlockUp(index))
        const newIndex = index - 1
        setTimeout(() => setSelectedBlockIndex(newIndex), 0)
      }
      else if (direction === 'down' && index < blocks.length - 1) {
        dispatch(moveBlockDown(index))
        const newIndex = index + 1
        setTimeout(() => setSelectedBlockIndex(newIndex), 0)
      }
    }
  }

  const icon = (type: Block['type']) => {
    switch (type) {
      case 'Image':
        return Image
      case 'Button':
        return Image
      case 'Headline':
        return Headline
      case 'Paragraph':
        return Paragraph
    }
  }

  return (
    <div ref={blocksRef} className="flex h-full flex-col gap-4 bg-violet-50 px-8 pb-4 pt-6">
      {blocks.map((block, index) => (
        <div
          key={index}
          className={`
            relative cursor-pointer rounded p-4 shadow-md

            ${selectedBlockIndex === index
          ? `bg-blue-100`
          : `bg-white`}
          `}
          onClick={() => setSelectedBlockIndex(index)}
        >
          { selectedBlockIndex === index && (
            <div className="absolute -top-[27px] right-2.5 flex gap-1.5">
              <div className="flex gap-3 rounded-t bg-blue-500 p-1.5">
                <button onClick={() => handleMoveBlock('down')}>
                  <img src={ArrowDown} alt="arrow down icon" />
                </button>
                <button onClick={() => handleMoveBlock('up')}>
                  <img src={ArrowTop} alt="arrow top icon" />
                </button>
              </div>
              <div className="flex gap-2 rounded-t bg-sky-300 p-[3px]">
                <button
                  onClick={() => dispatch(cloneBlock(index))}
                  className="rounded-sm bg-[#4B97B8] p-[3px]"
                >
                  <img src={Copy} alt="copy icon" />
                </button>
                <button onClick={() => dispatch(removeBlock(index))}>
                  <img src={Trash} alt="trash icon" />
                </button>
              </div>
            </div>
          )}
          <div className="flex flex-col items-center gap-2.5">
            <img src={icon(block.type)} alt="Block image" />
            <div className="text-xs">{block.type}</div>
            {selectedBlockIndex === index && (
              <input
                type="text"
                className="mt-2 w-full rounded border p-2"
                placeholder={`Enter ${block.type} content`}
                value={block.content}
                onChange={e => handleContentChange(e.target.value)}
              />
            )}
          </div>
        </div>
      ))}
    </div>
  )
}

export default Workspace
