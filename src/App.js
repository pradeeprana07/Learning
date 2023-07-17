import logo from './logo.svg';
import './App.css';
import Author from './Author.js';
import User from './User.js';

function App() {
  // component inside component  or nested component
  function Apple() {
    return (
      <p>This is apple component</p>
    )
  }
  return (
    <div className="App">
      <h1>hello this is pradeep's first react app</h1>
      <Author />
      <User />
      <Apple/>

      {/* we can call a nested componnent in one other way */}
      {Apple()} 

    </div>
  );
  
  
}


export default App;
