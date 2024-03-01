import { useEffect, useState } from 'react';
import './App.css';
import { UserList } from './components/UserList';
import { getUserData } from './api';
function App() {
  const [list, setList] = useState([]);
  useEffect(() => {
    getUserData()
      .then((data) => {
        setList(data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <h1>Monthly Rewards</h1>
      {list.length > 0 ? <UserList list={list} /> : <p>Loading...</p>}
    </>
  );
}

export default App;
