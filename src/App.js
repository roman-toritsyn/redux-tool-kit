import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { addCount, addUser, deleteUser } from './store/usersReducer';

function App() {
  const dispatch = useDispatch()
  const users = useSelector(state => state.global.users)
  const count = useSelector(state => state.global.count)

  const [newUserName, setNewUserName] = useState('')

    console.log(count);
    console.log(users);

  const usersList = users.map(
    user => <div key={user.id}>{user.name}</div>
  )

  return (
    <>
    <button onClick={() => dispatch(addCount())}>Count++</button>
    <div>Count: {count}</div>
      <div className="App">
        Users:
        {usersList}
      </div>
      <div>
        <button onClick={() => dispatch(addUser(newUserName))}>Create user</button>
        <input
          value={newUserName}
          placeholder={'Name of new user'}
          onChange={event => dispatch(setNewUserName(event.target.value))}
        >
        </input>
        <button onClick={() => dispatch(deleteUser(newUserName))}>Delete user</button>
      </div>
    </>
  );
}

export default App;
