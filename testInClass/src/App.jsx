import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Counter from './components/Counter/Counter'
import CounterWithReducer from './components/Reducer/CounterWithReducer'
import UsersList from './components/UsersList/UsersList'
import CounterWithUseReducer from './components/UseReducer/CounterWithUseReducer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      {/* <Counter/> */}
      {/* <CounterWithReducer/> */}
      {/* <UsersList/> */}
      <CounterWithUseReducer/>
    </div>
  )
}

export default App
