import React from 'react'
import {Route, Routes} from 'react-router-dom'
import TableEx from './Table/table'
import Home from './Home/Home'
import AddTable from './AddTable/addTable'
import TopNavbar from './Nav/navbar'
import EditTable from './AddTable/editTable'
import Signup from './signUp/signup'

const App = () => {
  return (
    <>
  <TopNavbar />
  {/* <BrowserRouter> */}
      <div style={{minHeight : "600px"}}>
    <Routes>
        <Route path='' element={<Home />} />
        <Route path='table' element={<TableEx />} />
        <Route path='addTable' element={<AddTable />} />
        <Route path='signup' element={<Signup />} />
        <Route path='editTable/:_id' element={<EditTable />} />
    </Routes>
      </div>
  {/* </BrowserRouter> */}
 </>
  )
}

export default App