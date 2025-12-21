import { useEffect, useState } from 'react'
import RegularUser from './RegularUser'
import './UserList.css'

const SERVER = 'http://localhost:8080'

function RegularUserList () {
  const [users, setUsers] = useState([])

  const getUsers = async () => {
    const response = await fetch(`${SERVER}/users`)
    const data = await response.json()
    const regularUsers = data.filter(user => user.type === 'regular-user')
    setUsers(regularUsers)
  }

  useEffect(() => {
    getUsers()
  }, [])

  return (
    <div>
      <h2>Regular Users</h2>
      <div className='user-list'>
        {
          users.map(e => <RegularUser key={e.id} item={e} />)
        }
      </div>
    </div>
  )
}

export default RegularUserList
