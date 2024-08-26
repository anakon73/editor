import React from 'react'
import { useSelector } from 'react-redux'
import type { RootState } from '../store'

const Preview: React.FC = () => {
  const blocks = useSelector((state: RootState) => state.blocks.blocks)

  return (
    <div className="flex flex-col items-center gap-8 bg-white px-8 pb-4 pt-8">
      {blocks.map((block, index) => (
        <div key={index}>
          {block.type === 'Image' && (
            <img className="w-full rounded object-cover" src={block.content} alt="Image" />
          )}
          {block.type === 'Headline' && (
            <h1 className="text-[22px] font-bold text-gray-800">
              {block.content}
            </h1>
          )}
          {block.type === 'Paragraph' && <p className="text-sm text-[#97AACD]">{block.content}</p>}
          {block.type === 'Button' && (
            <button className={`
              rounded bg-blue-600 px-8 py-2.5 text-sm font-medium text-white
            `}
            >
              {block.content}
            </button>
          )}
        </div>
      ))}
    </div>
  )
}

export default Preview
