import UserGreeting from './UserGreeting.jsx'

function App() {

  return (
    <>
      <UserGreeting isLoggedIn={false} username="BroCode" />
      {/*change 'isLoggedIn' to false or true... and check without 'username' statment*/}
    </>
  )
}

export default App
