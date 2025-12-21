import './PowerUser.css'

function PowerUser (props) {
  const { item } = props

  return (
    <div className='power-user'>
      <div className='username'>
        {item.username}
      </div>
      <div className='fullName'>
        {item.fullName}
      </div>
      <div className='user-type'>Power User</div>
    </div>
  )
}

export default PowerUser
