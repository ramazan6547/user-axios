import React from 'react'
const UserCard = ({username, id, name, email}) => {
  return (
    <div className='userdiv'>
        <h3>User{id}</h3>
        <h5>Name: {name}</h5>
        <h5>Username : {username}</h5>
        <h5>Email : {email}</h5>

    </div>
  )
}
export default UserCard