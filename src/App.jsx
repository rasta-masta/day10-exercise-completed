import { useEffect, useState } from 'react'
import { Route, Router, Routes } from 'react-router-dom'
import Home from './pages/home'
import Table from './pages/userTable'
import { useDispatch } from 'react-redux'
import axios from 'axios'
import { setData } from './redux/userSlice'


function App() {
  const dispatch = useDispatch()
  const [reload, setReload] = useState(false)

  const getData = async () => {
    try {
      const response = await axios.get('http://localhost:2000/user')
      const data = response.data
      // console.log(data)
      dispatch(setData(data))
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getData()
  }, [reload])

  return (
   
      <Routes> 
        <Route path="/" element={ <Home reload={reload} setReload={setReload}/> }/>
        <Route path="/userTable" element={ <Table reload={reload} setReload={setReload} /> }/> 
      </Routes>       
  )
}

export default App
