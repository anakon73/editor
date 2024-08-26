import { useDispatch } from 'react-redux'
import Headline from '../assets/icons/Headline.svg'
import Image from '../assets/icons/Image.svg'
import Paragraph from '../assets/icons/Paragraph.svg'
import { addBlock } from '../store/blocksSlice'
import type { AppDispatch } from '../store'
import type { Block } from '../types'

const Toolbox: React.FC = () => {
  const dispatch: AppDispatch = useDispatch()

  const blockTypes: {
    icon: string
    type: Block['type']
  }[] = [
    { icon: Headline, type: 'Headline' },
    { icon: Paragraph, type: 'Paragraph' },
    { icon: Image, type: 'Button' },
    { icon: Image, type: 'Image' },
  ]

  const handleAddBlock = (type: Block['type']) => {
    dispatch(addBlock({ type, content: '' }))
  }

  return (
    <div className="mt-8 grid grid-cols-2 gap-2.5 px-8">
      {blockTypes.map(type => (
        <button
          key={type.type}
          onClick={() => handleAddBlock(type.type)}
          className={`
            flex h-[83px] w-[100px] flex-col items-center justify-center gap-2.5
            rounded-md bg-slate-50 text-xs letter-[2%] text-gray-800
          `}
        >
          <img src={type.icon} alt={`${type.type} icon`} />
          {type.type}
        </button>
      ))}
    </div>
  )
}

export default Toolbox
