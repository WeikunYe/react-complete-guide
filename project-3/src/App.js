import 'bootstrap/dist/css/bootstrap.css';
import './App.css'
import { useState } from 'react';
import NewUserForm from "./components/NewUserForm";
import UserList from "./components/UserList"

function App() {
  
  const [users, setUsers] = useState([]);

  const handlerNewSubmittedUser = (data) => {
    const newUser = {
      ...data,
      id: Math.random().toString()
    }
    setUsers((preState)=>{
      return [...preState, newUser];
    })
  }

  return (
    <div className="container">
      <NewUserForm onNewUserSumbit={handlerNewSubmittedUser} />
      <UserList users={users} />
    </div>
  );
}

export default App;
