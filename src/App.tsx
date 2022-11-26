import { Routes, Route } from 'react-router-dom'
import Result from './components/Result'
import Signin from './components/Signin'
import SpinWheel from './components/SpinWheel'

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Signin />} />
        <Route path='/spinwheel' element={<SpinWheel />} />
        <Route path='/result' element={<Result />} />
      </Routes>
    </div>
  )
}

export default App
