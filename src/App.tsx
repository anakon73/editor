import Preview from './components/Preview'
import Toolbox from './components/Toolbox'
import Workspace from './components/Workspace'

function App() {
  return (
    <div className="mx-auto max-w-[1440px] font-roboto min-h-screen pt-6">
      <h1 className={`
        border-b border-slate-200 pb-6 text-2xl font-medium leading-7 tracking-[2%]
        text-gray-800
      `}
      >
        REACT EDITOR Test
      </h1>
      <div className="flex h-full">
        <div className="">
          <Toolbox />
        </div>
        <div className="w-2/4 p-4">
          <Workspace />
        </div>
        <div className="w-1/4 p-4">
          <Preview />
        </div>
      </div>
    </div>
  )
}

export default App
