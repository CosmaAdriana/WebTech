import { useEffect, useState } from 'react'
import PowerUser from './PowerUser'
import './UserList.css'

const SERVER = 'http://localhost:8080'

function PowerUserList () {
  const [users, setUsers] = useState([])

  const getUsers = async () => {
    const response = await fetch(`${SERVER}/users`)
    const data = await response.json()
    const powerUsers = data.filter(user => user.type === 'power-user')
    setUsers(powerUsers)
  }

  useEffect(() => {
    getUsers()
  }, [])

  return (
    <div>
      <h2>Power Users</h2>
      <div className='user-list'>
        {
          users.map(e => <PowerUser key={e.id} item={e} />)
        }
      </div>
    </div>
  )
}

export default PowerUserList
