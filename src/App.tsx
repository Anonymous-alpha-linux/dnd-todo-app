import { useCallback } from 'react'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import {setTodoListWatch} from './redux/actions/todo'

function App() {

  const {} = useSelector(s => s.)
  const dispatch = useDispatch();
  
  const handleClick = useCallback(() => {
    dispatch(setTodoListWatch())
  }, [])
  
  return ( 
    <>
      <button onClick={handleClick}>Click to add new item</button>


      <ul>
        <li><input value={""} placeholder='Input value'></input></li>
      </ul>
    </>
  )
}

export default App
