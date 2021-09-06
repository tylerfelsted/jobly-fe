import { useContext } from 'react';
import UserContext from './hooks/userContext';

function Home() {
  const { currentUser } = useContext(UserContext);
  if(currentUser) {
    return (
      <h1>Welcome {currentUser.username}</h1>
    )
  }

  return (
    <h1>Home Page</h1>
  )
}

export default Home;