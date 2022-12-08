import React, { useEffect, useState } from 'react'

function UsersList() {
    const [users, setUsers] = useState([])
    const [filteredUsers, setFilteredUsers] = useState([])
    const [inputUser, setInputUser] = useState('')

    useEffect(() => {
      
      const fetchData = async () => {
        const fetchUsers = await fetch('https://jsonplaceholder.typicode.com/users')
        const users = await fetchUsers.json()
        setUsers(users)
      }
      
      fetchData()
    }, [])
    
    const filterUsers = () => {
        const filteredUsers = users.filter(u => u.name.includes(inputUser))
        setUsers(filteredUsers)
    }

    const setFilUsers = (e) => {
        setInputUser(e.target.value)
    }

  return (
    <>
        <input type="text" onChange={setFilUsers} value={inputUser}/>

        <button onClick={filterUsers}>filter</button>

        <div>UsersList</div>
        {users ?  users.map(e => {
                return <h1 key={e.id}>{e.name}</h1>
        }) : null}
    </>
  )
}

export default UsersList