import React from 'react'
import { useSelector } from 'react-redux'
import type { RootState } from '../store'

const Preview: React.FC = () => {
  const blocks = useSelector((state: RootState) => state.blocks)

  return (
    <div className="space-y-4 bg-white p-4">
      {blocks.map((block, index) => (
        <div key={index}>
          {block.type === 'Image' && <img src={block.content} alt="Image" />}
          {block.type === 'Headline' && <h1 className="text-xl font-bold">{block.content}</h1>}
          {block.type === 'Paragraph' && <p>{block.content}</p>}
          {block.type === 'Button' && (
            <button className="rounded bg-blue-500 px-4 py-2 text-white">
              {block.content}
            </button>
          )}
        </div>
      ))}
    </div>
  )
}

export default Preview
