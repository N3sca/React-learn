import List from "./List"
import List2 from "./List2"

function App() {

  const fruits = [{id: 1, name: "apple", calories: 95},
                  {id: 2, name: "orange", calories: 45},
                  {id: 3, name: "banana", calories: 105},
                  {id: 4, name: "coconut", calories: 159},
                  {id: 5, name: "pinapple", calories: 37}];

  const veggies = [{id: 6, name: "potatos", calories: 110},
                  {id: 7, name: "celery", calories: 15},
                  {id: 8, name: "carrots", calories: 25},
                  {id: 9, name: "corn", calories: 63},
                  {id: 10, name: "broccoli", calories: 50}];

  return (
    <>
      {/*this list is all on List.jsx*/}
      <List/>

      {/*this list checks is lenght bigger than 0 and uses an universal method*/}
      {fruits.length > 0 ? <List2 items={fruits} category="Fruits"/> : null}
      {veggies.length > 0 ? <List2 items={veggies} category="Veggies"/> : null}
    </>
  )
}

export default App
