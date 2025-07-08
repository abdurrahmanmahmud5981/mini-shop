import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router'
const AppRouter:React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={``}>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter
