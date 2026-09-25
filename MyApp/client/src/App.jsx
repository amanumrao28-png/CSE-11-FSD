import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Counter from './components/Counter'
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
           <Route path='/' element={<h1>Home Page</h1>}/>
           <Route path='/counter' element={<Counter/>}/>
           <Route path='*' element={<h1> 404 element not found</h1>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App