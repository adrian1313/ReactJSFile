import React, {useState} from "react";
import Tweet from "./Tweet";
import './App.css';

function App (){

const [users, setUsers] = useState([
  {name: 'AJ', message: 'Hello there'},
  {name: 'CJ', message: 'I am CJ'},
  {name: 'Traversy', message: 'I am Travers'}
]);

  return(
    <div className = "app">
      {users.map(user => (
        <Tweet name={user.name} message = {user.message}/>
      ))}
    </div>
  );
}

// const [user, setUser] = userState({
//   name: "Ed",
//   age: 25,
//   posts: ['my first post' , 'my summer']
// });

// const decrement = () => {
//   setCount(count - 1);
// }
export default App;