import React, { useEffect, useState } from 'react'
import './Counter.css'

function Counter() {
    const [count, setCount] = useState(0)

    const Sum = () => {
        setCount(count + 1)
    }
    const Rest = () => {
        setCount(count - 1)
    }
    const [users, setUsers] = useState(null)
    const [filteredUsers, setFilteredUsers] = useState([])
    const [inputUser, setInputUser] = useState('')

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('https://jsonplaceholder.typicode.com/users')
            console.log(response)
            const users = await response.json();
            setUsers(users)
    }
            fetchData()
    },[])        

    // useEffect(() => {
    //   filter()
    
    // }, [inputUser])
    
    // const filteredData = APIData.filter((item) => {
    //     return Object.values(item).join('').toLowerCase().includes(searchInput.toLowerCase())
    // })

    

    const filter = (searchValue) => {
        setInputUser(searchValue)

        if(searchValue !== ''){

            // const filteredUsers = users.filter(u => {
            //     return Object.values(u).join('').toLowerCase().includes(inputUser.toLowerCase())
            // })
            const filteredUsers = users.filter(u => {
                return u.name.includes(inputUser);
            })

            setFilteredUsers(filteredUsers)
    
        }else{
            setFilteredUsers(users)
        }

    }
    
    console.log(inputUser);

    // useEffect(() => {
    //     // declare the async data fetching function  
    //     const fetchData = async () => {
    //         // get the data from the api    
    //         const data = await fetch('https://jsonplaceholder.typicode.com/users');
    //         // convert the data to json    
    //         const json = await data.json();
    //         // set state with the result    
    //         setUsers(json);}
    //         // call the function  
    //         fetchData()
    //         // make sure to catch any error    
    //         .catch(console.error);;}, [])

    const fetchInfo = () => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(json => setUsers(json))

    }
const [first, setfirst] = useState()
  return (
    <div className='counter-container'>

        <div className='input'>
            <input type="text" value={inputUser} onChange={(e) => filter(e.target.value) } />
        </div>
        <div className='button-container'>
            <button onClick={Sum}>Add</button>
            <button onClick={Rest}>Rest</button>
        </div>
        <div className='count-container'>
            <h1>
                {count}
            </h1>
        </div>
        <button onClick={fetchInfo}>Retrieve Info</button>
        <div className='users-retrieved'>
            
                {
                    // filter()
                    // filteredUsers ? filteredUsers.map(e => <div key={e.id}>{e.name}</div>) :
                    // <div>
                    //     <h1>users empty</h1>
                    // </div>

                    // inputUser.length>1 ? filteredUsers.map(e => {
                    //     return <h2 key={e.id}>{e.name}</h2>
                    // }) : 
                    
                    // users?.map(e => {
                    //     return <h2 key={e.id}>{e.name}</h2>
                    // })

                    first ? users.map(e => {
                        return <h2 key={e.id}>{e.name}</h2>
                    }) :
                    
                    <h1>
                        empty users
                    </h1>
                    // null
                    
                }
            
        </div>
    </div>
  )
}

export default Counter