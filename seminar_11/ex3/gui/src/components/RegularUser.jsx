import './RegularUser.css'

function RegularUser (props) {
  const { item } = props

  return (
    <div className='regular-user'>
      <div className='username'>
        {item.username}
      </div>
      <div className='fullName'>
        {item.fullName}
      </div>
      <div className='user-type'>Regular User</div>
    </div>
  )
}

export default RegularUser
