import Student from "./Student"

function App() {

  return (
    <>
      <Student name="Spongbob" age={30} isStudent={true}/>   
      <Student name="Patrick" age={42} isStudent={false}/>   
      <Student name="Squidward" age={50} isStudent={false}/>   
      <Student name="Sandy" age={27} isStudent={true}/>   
      <Student />   
    </>
  )
}

export default App
