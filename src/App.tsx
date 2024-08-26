import Preview from './components/Preview'
import Toolbox from './components/Toolbox'
import Workspace from './components/Workspace'

function App() {
  return (
    <div className="mx-auto max-w-[1440px] font-roboto pt-6 leading-normal tracking-[2%]">
      <h1 className="border-b border-slate-200 pb-6 text-2xl font-medium text-gray-800">
        REACT EDITOR Test
      </h1>
      <div className="flex h-full min-h-[90vh]">
        <div className="border-r border-slate-200">
          <Toolbox />
        </div>
        <div className="w-full max-w-[538px]">
          <Workspace />
        </div>
        <div className="w-full max-w-[632px]">
          <Preview />
        </div>
      </div>
    </div>
  )
}

export default App
