
import './App.css';
import axios from 'axios';
import { useState, useEffect } from 'react';
import UserCard from "./component/UserCard";
function App() {
  const [users, setUsers] = useState([])
  const getApiData = async () => {
    const response = await axios({
      url: "https://jsonplaceholder.typicode.com/users",
      method: "GET",
    });
    setUsers(response.data)
  }
  useEffect(() => {
    getApiData()
  }, [])
  useEffect(() => {
    console.log("Users : ", users)
  }, [users])
  return (
    <div className="App">
      <h1>USERS</h1>
      <div className='mainUserDiv'>
        {users.map(user => {
          return <UserCard key={user.id} username={user.username} id={user.id} name={user.name} email={user.email}/>
        })}
      </div>
    </div>
  );
}
export default App;
